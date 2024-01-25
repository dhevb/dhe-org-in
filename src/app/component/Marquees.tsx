import React from 'react';
import Marquee from 'react-fast-marquee';

const AnnouncementWithMarquees: React.FC = () => {

  const marquees = [

    "Shiksha Mahakumbh IIT Ropar 4-6  October, 2024",
    "Shiksha Kumbh NIT Drinagar  April 2024",
    "Shiksha Kumbh NIT Delhi June 2024",
    "Shiksha Kumbh NIT Hamirpur  August  2024"
  ];

  return (
    <div  className='flex flex-row bg-primary-light '>
     
    <div className='text-white bg-primary-color w-1/12 rounded-sm text-center pe-2 text-xl py-1 ' >
      Anouncment
    </div>
      <Marquee pauseOnHover gradient={false}>
        {marquees.map((marqueeContent, index) => (
          <div key={index} className='text-white pe-12'>{marqueeContent}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default AnnouncementWithMarquees;
