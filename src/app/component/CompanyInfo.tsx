import React from "react";

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-white">
      <img
        src="/logo.png"
        alt="Company Logo"
        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full shadow-lg border-2 border-red-600"
      />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold ml-4 text-red-600">
        Department of Holistic Education
      </h1>
    </div>
  );
};

export default CompanyInfo;
