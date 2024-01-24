import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-white items-center">
      <div className="md:mr-4">
        <Image
          src="/logo.png"
          alt="Company Logo"
          className="p-2 w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24"
          width={500}
          height={500}
        />
      </div>
      <div className="text-center md:text-start flex-grow md:mt-0 mt-4">
        <Link
          href="/"
          className="text-l md:text-lg lg:text-xl font-semibold text-red-500"
        >
          Department of Holistic Education
        </Link>
      </div>
      <div className="md:ml-auto hidden md:flex items-center">
        <p className="md:text-base">
          <span className="font-semibold text-red-500">For any Query:</span>{" "}
        </p>
        <FontAwesomeIcon
          icon={faPhone}
          size="lg"
          className="text-red-500 h-3 w-6 my-1 "
        />
        <a href="tel:7627888222" className="text-red-500 font-semibold text-sm">
          7627888222
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
