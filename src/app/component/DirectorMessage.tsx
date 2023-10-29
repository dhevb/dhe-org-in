"use client";
import React from "react";
import Image from "next/image";
const DirectorMessage: React.FC = () => {
  return (
    <div className="bg-white p-4 items-center">
      <h2 className="text-2xl font-semibold mb-4 text-black">
        Director Message
      </h2>
      <Image
        src="/director.JPG"
        alt="Director's Image"
        className="w-80 h-80 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full shadow-lg border-2 border-red-600 mx-auto"
        width={500}
        height={500}
      />

      <p className="text-center font-semibold">
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
        Serving Society by Education is the Best Way of Serving the Nation. But
        what kind of education it should be is the most important aspect. In
        today’s era, on one side, the literacy rate is increasing, and on the
        other side, there is a huge increase in mental patients, disturbed
        families, violence, etc. Education should make a person more
        compassionate, accommodative, and social. However, things are happening
        just the opposite.
      </p>
      <p className="text-justify text-black">
        Additionally, the scarcity of skilled workforce is all around. In this
        scenario, the holistic approach to mold a child right from his or her
        initial days is a must. Molding these green cakes should be in such a
        way that they not only become skilled individuals but also more
        compassionate, accommodative, and social. To inculcate this culture,
        Department of Holistic Education at Sarvhitkari Educational Society was
        conceptualized. I feel contented leading this futuristic Department and
        thrive to make a difference in school education and society.
      </p>
    </div>
  );
};

export default DirectorMessage;
