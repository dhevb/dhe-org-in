import React from "react";
import MemberShipForm from "./MemberShipForm";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Workshop = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto pt-4 bg-white text-primary-color p-2">
        <h2 className="text-2xl font-bold mb-4 text-red-950 text-center">
          Workshop Announcement
        </h2>
        <Carousel>
          <div className="h-[25vh] pl-1 pr-1 md:h-[60vh]">
            <img src="/14.jpg" alt="" />
          </div>
          <div className="h-[25vh] pl-1 pr-1 md:h-[60vh]">
            <img src="/15.jpg" alt="" />
          </div>
          <div className="h-[25vh] pl-1 pr-1 md:h-[60vh]">
            <img src="/16.jpg" alt="" />
          </div>
          <div className="h-[25vh] pl-1 pr-1 md:h-[60vh]">
            <img src="/17.jpg" alt="" />
          </div>
        </Carousel>
        <h2 className="text-xl font-bold mb-4 justify-between">
          Innovation and Entrepreneurship for School Students, Teachers and Atal
          Tinkering Labs&apos; Co-ordinators
        </h2>
        <ul className="list-none pl-2 mb-6 text-justify pr-2">
          <li>
            We are thrilled to announce a One-Day Workshop on &quot;Innovation
            and Entrepreneurship for School Students, Teachers and Atal
            Tinkering Labs&apos; Co-ordinators&quot; organized jointly by the
            Department of Holistic Education (DHE) and CSIR-Central Scientific
            Instruments Organisation (CSIO) under the CSIR-CSIO Skill Integrated
            Initiative and PRISM Scheme.
          </li>
          <br />
          <li>
            <span className="font-bold text-red-800">Date: 10th May 2024</span>
          </li>
          <br />
          <li>
            <span className="font-bold text-red-800">Time: 10AM to 5PM</span>
          </li>
          <br />
          <li>
            <span className="font-bold text-red-800">
              Venue: CSIO Chandigarh
            </span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">About the Workshop</h2>
        <ul className="list-none pl-2 mb-6">
          <li>
            This workshop aims to foster innovation and entrepreneurship skills
            among school students, teachers and co-ordinators of Atal Tinkering
            Labs in the tri-city area of Chandigarh, Mohali, and Panchkula.
            Through insightful sessions, interactive discussions, and hands-on
            experiences, participants will gain valuable knowledge and
            inspiration to explore the world of innovation and entrepreneurship
            from scientists of CSIO, ISRO, DRDO, Industry Experts, Subject
            Experts, etc.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Target Participants</h2>
        <ul className="list-decimal pl-6 mb-6">
          <li>Students (Grades 9-12)</li>
          <li>ATL Labs Coordinators</li>
          <li>Science Teachers (TGT &amp; PGT) from Tricity Schools</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-red-800">
          Tentative Schedule of Workshop
        </h2>
        <ul className="list-none pl-2 mb-6">
          <h6 className="text-xl font-bold">Session-1</h6>
          <li>Inaugural Address by Director, CSIO</li>
          <h6 className="text-xl font-bold">Session-2</h6>
          <li>
            Insights into Cutting-Edge Research at CSIO Chandigarh and
            Opportunities for School Students and Teachers
          </li>
          <h6 className="text-xl font-bold">Session-3</h6>
          <li>Introduction to Innovation and Entrepreneurship</li>
          <h6 className="text-xl font-bold">Session-4</h6>
          <li>Interaction Session with Women Entrepreneurs</li>
          <h6 className="text-xl font-bold">Session-5</h6>
          <li>
            Insights into Cutting-Edge Research at DHE Mohali and Opportunities
            for School Students and Teachers
          </li>
          <h6 className="text-xl font-bold">Session-6</h6>
          <li>Visit of Mechatronics/Electronics Labs at CSIO Chandigarh</li>
          <h6 className="text-xl font-bold">Session-7</h6>
          <li>Q&amp;A and Networking</li>
        </ul>
        <h2 className="text-xl">
          For registration,{" "}
          <a className="font-bold text-red-800" href="./registrationForm">
            click here
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Workshop;
