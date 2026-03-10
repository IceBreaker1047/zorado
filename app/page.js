import Card from "@/ui/Card";
import { getArticles } from "./lib/parser";
import React from "react";
import AdUnit from "@/ui/AdUnit";

export const revalidate = 3600;

export default async function page() {
  const allArticles = await getArticles();

  const now = new Date();
  now.setMinutes(0, 0, 0);

  const fortyEightHoursAgo = new Date(now);
  fortyEightHoursAgo.setHours(fortyEightHoursAgo.getHours() - 48);

  const filteredArticles = allArticles.filter((article) => {
    const pubDate = new Date(article.published);
    return pubDate >= fortyEightHoursAgo;
  });

  return (
    <div className="bg-white min-h-screen font-sans text-neutral-900">
      <header className="pt-20 pb-12 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-neutral-900">
          Zorado
        </h1>
        <p className="text-neutral-400 mt-4 text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
          The Daily Tech Digest
        </p>
      </header>

      <main className="flex flex-col items-center w-full px-6 pb-20 gap-2">
        {filteredArticles.length === 0 ? (
          <p className="text-neutral-400 mt-20 font-medium">All caught up for now.</p>
        ) : (
          filteredArticles.map((article, index) => (
            <React.Fragment key={article.link || index}>
              <Card
                name={article.title}
                summary={article.summary}
                published={article.published}
                link={article.link}
              />
              {(index + 1) % 3 === 0 && <AdUnit />}
            </React.Fragment>
          ))
        )}
      </main>
    </div>
  );
}