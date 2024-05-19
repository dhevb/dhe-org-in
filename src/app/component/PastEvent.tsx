import React from "react";
import Link from "next/link";



const PastEvent: React.FC = () => {
  return (
    <div className="p-2 mt-4 h-auto min-h-[70vh]">
    <h2 className="text-2xl text-center font-bold mb-4 text-primary-color">Our Past Events</h2>
    <div className="overflow-x-auto mb-6 m">
      <table className="w-auto table-auto py-2">
        <thead>
          <tr className="bg-primary-color ">
            <th className="w-1/2 sm:w-1/5 px-1 py-2 border text-left text-white">
              Title
            </th>
            <th className="w-1/2 sm:w-1/5 px-1 py-2 border text-left text-white">
            Date
            </th>
            <th className="w-1/2 sm:w-1/5 px-1 py-2 border text-left text-white">
              Venue
            </th>
            <th className="w-1/2 sm:w-1/5 px-1 py-2 border text-left text-white">
              More Information
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            Innovation and Entrepreneurship for School Students, Teachers and Atal Tinkering Labs' Co-ordinators
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            `May 10, 2024`
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
             CSIO Chandigarh
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              <Link href="/workshop" className="text-primary font-bold hover:text-blue-950">Click here</Link> 
            </td>
          </tr>
          <tr>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            Teacher Development Program in Collebration with NITTTER
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            `March 12-17, 2024`
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              NITTTER Chandigarh
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              <Link href="/" className="text-primary font-bold hover:text-blue-950">Click here</Link> 
            </td>
          </tr>
          <tr>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            Sponken English Workshop
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            `Januaury 25-31, 2024`
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            GITA NIKETAN, Kurukshetra
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              <Link href="/" className="text-primary font-bold hover:text-blue-950">Click here</Link> 
            </td>
          </tr>
          <tr>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            Role of Academic-Driven Startups in Economy
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            `December 30, 2023`
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              National Institute of Technology Kurukshetra
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              <Link href="/" className="text-primary font-bold hover:text-blue-950">Click here</Link> 
            </td>
          </tr>
          <tr>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            Recent Advances in School Education
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            `June 09-11, 2023`
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              National Institute of Technology Jalandhar
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              <Link href="/" className="text-primary font-bold hover:text-blue-950">Click here</Link> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PastEvent;
