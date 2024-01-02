"use client";
import Image from "next/image";
import React from "react";

const DirectorMessage: React.FC = () => {
  return (
    <div className="bg-white p-4 items-center">
      <h2 className="text-2xl font-semibold mb-4 text-black">Director Message</h2>
      <Image
  src="/director.JPG"
  alt="Director's Image"
  className="w-80 h-80 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full shadow-lg border-2 border-red-600 mx-auto"
 
/>

      <p className = "text-center font-semibold text-black">
        <strong>Dr. Thakur SKR</strong>
        <br />
        Your thoughts decide your destiny
        <br />
        Director, Department of Holistic Education
        <br />
        <a href="https://drthakurskr.com" className="text-blue-500">
          drthakurskr.com
        </a>
      </p>
      <p className="text-justify text-black">
      We believe that the best way to serve the nation is to empower the society by
      means of education. In this regard, the quality of education which is being
      imparted is pivotal. In today’s era, on one hand, with increasing number of
      educational institutes, the literacy rate has been increasing steadfastly. However,
      on the other hand, there is a huge increase in unemployment, huge gap in
      requirement of skilled manforce, physical and mental illnesses, disturbed
      families, violence and unrest, etc.
      </p>
      <p className="text-justify text-black">
      The Department of Holistic Education at Vidya Bharti was conceptualized to
      effectively bridge this gap in the society by overhauling the education system.
      We at DHE, are committed to make the education system more comprehensive
      in nature by focusing not only on skill development but also aim at holistic
      development of students ranging from physical fitness to emotional wellbeing.
      Our vision is to impart this holistic education to children right from their young
      age so that we can mold these green cakes into not only skilled adults but also
      responsible humans who are an asset for the nation.
      </p>
      <p  className="text-justify text-black">
      I feel honored to be leading this Department and hope to revolutionize our
      system of education for the betterment of society.
      </p>
    </div>
  );
};

export default DirectorMessage;
