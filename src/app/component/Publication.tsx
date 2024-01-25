"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Publication: React.FC = () => {
  let text1 = `The turn around was massive in this mass event. The projects and the papers were enormous. To see this much turn around in terms of good works of all strata of society, it was decided to preserve it and further promote it through the official journal of this mass movement. Accordingly, Echoes of Shiksha Mahakumbh transformed into a quarterly journal to be launched i.e., Viksit India's which is an integral component of the Shiksha Mahakumbh initiative, a distinguished effort by the Department of Holistic Education in the realm of education. Your extensive expertise and profound insights in the field of education position you as a valuable contributor to this prestigious platform.
  
    Dedicated to education advancement: "Viksit India" is committed to nurturing discussions, research, and insights that pertain to the global educational landscape. We firmly believe that the wealth of experience and unwavering commitment to education align seamlessly with the objectives of this journal. The active participation has the potential to play a pivotal role in shaping the discourse on education.
   
    Comprehensive coverage of educational aspects: Embark on a profound exploration of the multifaceted world of education through this journal's comprehensive coverage. From pioneering research to visionary perspectives, the team of the journal meticulously examine every facet, ensuring that one stays at the forefront of the ever-evolving domain of learning and teaching.
    
    Viksit India journal is the passport to a realm filled with knowledge, inspiration, and innovation within the field of education.
     `;

  const text2 = `Recent Advances in School Education is a compendium of events from the inauguration to the passing of the world’s first Shiksha Mahakumbh, inspired by the spirit of Kumbh culture in ancient Bharat. Shiksha Mahakumbh is the brainchild of Dr. Thakur SKR, a prominent scientist of ISRO and staunch worker of RSS, which took shape under the able guidance of Vijay Kumar Nadda, a visionary and forward-looking RSS Pracharak and Organising Secretary of Vidya Bharti (North Zone). The inaugural edition of Shiksha Mahakumbh i.e., National Conference on Recent Advances in School Education (RASE 2023) was organised by Sarvhitkari Educational Society, a prominent unit of Vidya Bharti – Akhil Bhartiya Shiksha Sansthan in the state of Punjab, in collaboration with Dr. B. R. Ambedkar National Institute of Technology Jalandhar. The conference was held from June 9to 11, 2023 at the esteemed premises of Dr. B. R. Ambedkar National Institute of Technology, Jalandhar.
  `;
  const [isText1Expanded, setIsText1Expanded] = useState(false);
  const [isText2Expanded, setIsText2Expanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile layout

  const toggleText1 = () => {
    setIsText1Expanded(!isText1Expanded);
  };

  const toggleText2 = () => {
    setIsText2Expanded(!isText2Expanded);
  };
  const handleGoToHome = () => {
    // Redirect to the home page (replace '/home' with your actual home page URL)
    window.location.href = "http://vi.rase.co.in";
  };
  const openPDF = () => {
    // Open the PDF in a new tab or window
    window.open("Proceeding.pdf", "_blank");
  };

  useEffect(() => {
    const handleWindowResize = () => {
      function isMobileScreen() {
        // Define your mobile breakpoint (e.g., 640px)
        return window.innerWidth < 640;
      }
      // Update isMobile based on screen width
      setIsMobile(isMobileScreen());
    };
    function isMobileScreen() {
      // Define your mobile breakpoint (e.g., 640px)
      return window.innerWidth < 640;
    }
    // Check window size initially
    setIsMobile(isMobileScreen());

    // Add a listener for window resize events
    window.addEventListener("resize", handleWindowResize);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array to run this effect only once

  // Define the text class based on isMobile
  // Define the text class based on isMobile
  const textClass = isMobile ? "text-l" : "text-l";
  const textClassHeading = isMobile ? "text-xl" : "text-xl";

  return (
    <div className="bg-white p-2 flex flex-col justify-between items-start">
      <h1
        className={`${textClassHeading} font-semibold py-6 text-primary-color text-center text-3xl`}
      >
        Journal
      </h1>
      <div
        className={`whitespace-pre-line text-justify ${textClass} text-black`}
      >
        {isText1Expanded ? text1 : isMobile ? text1.slice(0, 250) : text1}
        <button
          onClick={toggleText1}
          className={`text-blue-500 ${
            isText1Expanded || !isMobile ? "hidden" : ""
          }`}
        >
          Read More
        </button>
      </div>
      <div
        className={`whitespace-pre-line  ${textClass} text-blue-400 underline`}
        onClick={handleGoToHome}
      >
        click here for more inforamtion.....
      </div>
      <h1
        className={`${textClassHeading} font-semibold py-4 text-primary-color text-center`}
      >
        Books
      </h1>
      <div
        className={`whitespace-pre-line text-justify ${textClass} text-black`}
      >
        {isText2Expanded ? text2 : isMobile ? text2.slice(0, 248) : text2}
        <button
          onClick={toggleText2}
          className={`text-blue-500 ${
            isText2Expanded || !isMobile ? "hidden" : ""
          }`}
        >
          Read More
        </button>
      </div>
      <p> <Link className="text-blue-400"  href="/contact">{`To acquire a copy of this book, please don't hesitate to get in touch with us.`}</Link></p>
      <div
        className={`whitespace-pre-line ${textClass} text-blue-400 underline`}
        onClick={openPDF}
      >Click here for book preview...</div>
    </div>
  );
};

export default Publication;
