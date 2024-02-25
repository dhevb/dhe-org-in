"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Floating from "./component/Floating";
import CompanyInfo from "./component/CompanyInfo";
import Header from "./component/Header";
import BottomView from "./component/BottomView";
const inter = Inter({ subsets: ["latin"] });
import  toast , { Toaster } from "react-hot-toast";
import Modal from "./component/Modal";
import { useState, useEffect } from "react";


interface CustomWindow extends Window {
  localStream?: MediaStream;
  localAudio?: HTMLAudioElement;
}

declare var window: CustomWindow;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; 
   const handlePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      window.localStream = stream;
      
      if (!window.localAudio) {
        window.localAudio = new Audio();
        document.body.appendChild(window.localAudio);
      }

      window.localAudio.srcObject = stream;
      window.localAudio.autoplay = true;
    } catch (err) {
      console.error(`You got an error: ${err}`);
    }
  };

  useEffect(() => {
    // Uncomment the line below to automatically request permissions on page load (not recommended).
    // handlePermission();
  }, []);

  return (
    <html lang="en">
      <head>{
        process.env.NODE_ENV === "production" && (
        <script 
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4330032354977759"
        crossOrigin="anonymous"></script>
        )}
      <script async src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script async src="https://mediafiles.botpress.cloud/94a7b285-719e-4be3-8c2b-9b06c8702257/webchat/config.js" defer></script> </head>
     
        <meta http-equiv="refresh" content="1000" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
          Department of Holistic Education - Vidya Bharti
        </title>
        <meta
          name="keywords"
          content="Department of Holistic Education,holistic department, DHE ,Vidya Bharti, National Conference on Recent Advances in School Education, Rase"
        />
        <meta name="description" content="Joint Conference" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />

      <body className={inter.className} style={{ background: '#ffffff' }}>
      <CompanyInfo/>
    <Header />
        {children}
        <BottomView />
    
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/n4MShOzVT_s?si=d66BKGSw4OVD0Vcf&amp;controls=0&amp;start=1&amp;autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
         </Modal>
         <NextTopLoader
          color="#F44336"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={false}
          showSpinner={false}
          shadow="0 0 10px #F44336,0 0 5px #F44336"
        />
          <Toaster/>
      </body>
  
    </html>
  );
}
