import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquees: React.FC = () => {

  interface Item {
    imageUrl: string;
    text: string;
    link: string;
  }

  const marquees: Item[] = [

  { imageUrl: '/new.gif', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/new.gif', text:"Shiksha-Kumbh - NIT Srinagar,  April, 2024",link: 'https://sk24.rase.co.in/' },
  { imageUrl: '/new.gif', text:"Shiksha-Kumbh -  NIT Delhi, June, 2024",link: 'https://sk24.rase.co.in/' },
  { imageUrl: '/new.gif', text: "Shiksha-Kumbh - NIT Hamirpur,  August,  2024", link: 'https://sk24.rase.co.in/' },
  ];

  return (
    <div  className='flex flex-row bg-primary-light w-full'>
     
    <div className='text-white bg-primary-color  rounded-sm text-center pe-2 text-xl py-1 ' >
    Announcement
    </div>
      <Marquee  pauseOnHover={true}  pauseOnClick={true}>
        {marquees.map((marqueeContent, index) => (
          <p key={index} className='text-white pe-12'>{marqueeContent.text}</p>
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;
