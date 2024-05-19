import React from "react";
import Link from "next/link";



const UpcomingEvent: React.FC = () => {
  return (
    <div className="p-2 mt-4 h-auto min-h-[70vh]">
    <h2 className="text-2xl text-center font-bold mb-4 text-primary-color">Our Upcoming Events</h2>
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
            Role of Academic&#45;driven Startups in Developing Economy of J&amp;K   
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            June 29&#45;30, 2024
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            National Institute of Technology Srinagar
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
              <Link href="https://sk24.rase.co.in" className="text-primary font-bold hover:text-blue-950">Click here</Link> 
            </td>
          </tr>
          <tr>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            Indian Education System for Global Developement
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            October 4&#45;6, 2024
            </td>
            <td className="w-full sm:w-1/5 px-1 py-2 border text-left text-black">
            Indian Institute of Technology Ropar
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

export default UpcomingEvent;
