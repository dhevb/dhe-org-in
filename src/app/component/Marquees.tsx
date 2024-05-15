import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquees: React.FC = () => {

  interface Item {
    imageUrl: string;
    text: string;
    link: string;
  }

  const marquees: Item[] = [
    { imageUrl: '/new.gif', text: "Dr. Thakur SKR, Sci/Engr-SF at ISRO and Director of the Department of Holistic Education & Vidya Bharti Institute of Training and Research, along with Prof. Rajeev Ahuja, Director of IIT Ropar, had the honor of meeting Smt. Droupadi Murmu, the Hon’ble President of India, regarding the Shiksha Mahakumbh 2024.",    link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  
    { imageUrl: '/new.gif', text: "आपके साथ ये ख़बर साँझा करते हुए हर्ष हो रहा है कि DHE की HEI को-ऑर्डिनेशन सेल मार्च 11, 2024 साय 6 बजे INST मोहाली जोकि नैशनल इम्पॉर्टन्स का एक संस्थान है के साथ एक MoU साइन करने जा रही है। आपको बता दें कि DHE के प्रयास से अब तक IIT रोपड, NIT जालंधर, सेंट्रल यूनिवर्सिटी भटिंडा, DAV यूनिवर्सिटी जालंधर, आदि संस्थानों के बाद इस बड़े संस्थान के साथ MoU DHE करने जा रहा है।  आप सभी LMC के सम्मानिय सदस्यों से आग्रह है कि आप सभी इसमें मार्च 11, 2024 साय 6 बजे सम्मिलित हो।", link: 'https://sm24.rase.co.in/' },
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
