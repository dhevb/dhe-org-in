import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomView from "./component/BottomView";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Department of Holestic Education",
  description: "Department of Holistic Education is the brainchild of Dr. Thakur SKR who is a renowned scientist of ISRO, dedicated RSS worker, and accomplishedauthor. Level of education shall not be gauged by marks alone. In true sense, it’s the complete transformation of a green cake into a valuableasset for society. The students shall be full of energy, skills, and values when they come out from the institution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{
        process.env.NODE_ENV === "production" && (
        <script 
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4330032354977759"
        crossOrigin="anonymous"></script>
        )}
      </head>
      <div>
        <meta http-equiv="refresh" content="1000" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
          Department of Holistic Education - Vidya Bharati
        </title>
        <meta
          name="keywords"
          content="Department of Holistic Education,holistic department, DHE ,Vidya Bharati, National Conference on Recent Advances in School Education, Rase"
        />
        <meta name="description" content="Joint Conference" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />
        <NextTopLoader
          color="#F44336"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={false}
          showSpinner={false}
          shadow="0 0 10px #F44336,0 0 5px #F44336"
        />
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
