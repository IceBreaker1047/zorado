import "./globals.css";

export const metadata = {
  title: "Zorado | The Daily Tech Digest",
  description: "A minimalist news aggregator for modern minds.",
  other: {
    "google-adsense-account": "ca-pub-9802160883492803",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white selection:bg-neutral-200">
        {children}
      </body>
    </html>
  );
}