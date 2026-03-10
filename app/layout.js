import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Zorado | The Daily Tech Digest",
  description: "A minimalist news aggregator for modern minds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9802160883492803"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased bg-white selection:bg-neutral-200">
        {children}
      </body>
    </html>
  );
}