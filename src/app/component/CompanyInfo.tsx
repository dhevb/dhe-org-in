import React from "react";
import Image from 'next/image'
import Link from "next/link";

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex p-4 bg-white items-center">
      <Image
        src="/logo.png"
        alt="Company Logo"
        className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 "
        width={500}
        height={500}
      />
      <div className="text-start">
          <Link
            href="/"
            className="text-m md:text-l lg:text-xl font-semibold text-red-500"
          >
            Department of Holistic Education
          </Link>
          </div>
    </div>
  );
};

export default CompanyInfo;
