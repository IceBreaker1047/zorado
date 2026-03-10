import Parser from "rss-parser";

const feeds = [
    "https://techcrunch.com/feed/",
    "https://www.theverge.com/rss/index.xml",
    "https://www.wired.com/feed/rss",
    "https://stratechery.com/feed/",
    "https://www.theaifield.com/feed/"
];

export async function getArticles() {
    const parser = new Parser();
    let articles = [];

    const feedPromises = feeds.map(async (url) => {
        try {
            const feed = await parser.parseURL(url);
            return feed.items.map((item) => ({
                title: item.title,
                link: item.link,
                summary: item.contentSnippet || item.summary || item.content || "",
                published: item.pubDate || item.isoDate || "",
                dateValue: new Date(item.pubDate || item.isoDate).getTime()
            }));
        } catch (error) {
            console.error(`Error fetching feed from ${url}:`, error);
            return [];
        }
    });

    const results = await Promise.all(feedPromises);

    articles = results.flat().sort((a, b) => b.dateValue - a.dateValue);

    return articles;
}