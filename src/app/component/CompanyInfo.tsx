import React from "react";
import Image from "next/image";
import Link from "next/link";

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-white items-center">
      <div className="md:mr-4">
        <Image
          src="/logo.png"
          alt="Company Logo"
          className="p-2 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
          width={500}
          height={500}
        />
      </div>
      <div className="text-center md:text-start flex-grow md:mt-0 mt-4">
        <Link
          href="/"
          className="text-sm md:text-lg lg:text-xl font-semibold text-red-500"
        >
          Department of Holistic Education
        </Link>
      </div>
      <div className="md:ml-auto flex item-center mt-4 md:mt-0">
        <Link
          href="/contribute" // Assuming you are using react-router-dom
          className="text-sm md:text-md lg:text-md font-semibold text-white px-3 py-1 rounded-md bg-red-500"
        >
          Membership Form
        </Link>
      </div>
    </div>
  );
};

export default CompanyInfo;
