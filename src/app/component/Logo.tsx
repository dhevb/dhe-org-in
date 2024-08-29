"use client";
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import Image from 'next/image';
import vbitr from '../../../public/logos/vbitr.png'
import viksitindia from '../../../public/logos/viksitindia.png'
import sarvatr from '../../../public/logos/sarvatr.png'
import rase from '../../../public/logos/shikshamahakumbh.png'
import holisticharbour from '../../../public/logos/holisticharbour.jpeg'
import job360 from '../../../public/logos/job360.png'
import poojawala from '../../../public/logos/poojawala.png'
import swadeshibazar from '../../../public/logos/swadeshibazar.png'
import tredul from '../../../public/logos/tre-dul.png'
import tudu from '../../../public/logos/Tudu.png'
import dhe from '../../../public/logos/dhe.png'
import vidyabharti from '../../../public/logos/vidyabharti.png'
import pb100 from '../../../public/logos/pb100.png'

const { Meta } = Card;

const Logos: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const cardData = [
    {
      title: "VBITR Chandigarh",
      description: "Click on the below icon to preview or download the Logo.",
      image: vbitr,
      previewLink: '/vbitr.png', 
      downloadLink: '/vbitr.png',
    },
    {
      title: "Viksit India",
      description: "Click on the below icon to preview or download the Logo.",
      image: viksitindia,
      previewLink: '/viksitindia.png', 
      downloadLink: '/viksitindia.png',
    },
    {
      title: "Sarvatr",
      description: "Click on the below icon to preview or download the Logo.",
      image: sarvatr,
      previewLink: '/sarvatr.png', 
      downloadLink: '/sarvatr.png',
    },
    {
      title: "Rase",
      description: "Click on the below icon to preview or download the Logo.",
      image: rase,
      previewLink: '/shikshamahakumbh.png', 
      downloadLink: '/shikshamahakumbh.png',
    },
    {
      title: "Holistic Harbour",
      description: "Click on the below icon to preview or download the Logo.",
      image: holisticharbour,
      previewLink: '/holisticharbour.jpeg', 
      downloadLink: '/holisticharbour.jpeg',
    },
    {
      title: "Job 360",
      description: "Click on the below icon to preview or download the Logo.",
      image: job360,
      previewLink: '/job360.png', 
      downloadLink: '/job360.png',
    },
    {
      title: "Pooja Wala",
      description: "Click on the below icon to preview or download the Logo.",
      image: poojawala,
      previewLink: '/poojawala.png', 
      downloadLink: '/poojawala.png',
    },
    {
      title: "Swadeshi Bazar",
      description: "Click on the below icon to preview or download the Logo.",
      image: swadeshibazar,
      previewLink: '/swadeshibazar.png', 
      downloadLink: '/swadeshibazar.png', 
    },
    {
      title: "Tredul",
      description: "Click on the below icon to preview or download the Logo.",
      image: tredul,
      previewLink: '/tre-dul.png', 
      downloadLink: '/tre-dul.png',
    },
    {
      title: "Tudu",
      description: "Click on the below icon to preview or download the Logo.",
      image: tudu,
      previewLink: '/Tudu.png', 
      downloadLink: '/Tudu.png',
    },
    {
      title: "DHE",
      description: "Click on the below icon to preview or download the Logo.",
      image: dhe,
      previewLink: '/dhe.png', 
      downloadLink: '/dhe.png',
    },
    {
      title: "Vidya Bharti",
      description: "Click on the below icon to preview or download the Logo.",
      image: vidyabharti,
      previewLink: '/vidyabharti.png', 
      downloadLink: '/vidyabharti.png',
    },
    {
      title: "Punjab Super 100",
      description: "Click on the below icon to preview or download the Logo.",
      image: pb100,
      previewLink: '/pb100.png', 
      downloadLink: '/pb100.png',
    },
    // Add more cards as needed
  ];

  const openPreview = (previewLink: string) => {
    window.open(previewLink, '_blank');
  };

  const downloadLogos = (downloadLink: string) => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = downloadLink.substring(downloadLink.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold text-primary text-center mb-6'>Logos</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            style={{ width: isMobile ? '100%' : 300, marginBottom: 20 }}
            bodyStyle={{ height: 120 }}
            cover={
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '130%',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Image
                    alt="book"
                    src={data.image}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            }
            actions={[
              <EyeOutlined key="preview" onClick={() => openPreview(data.previewLink)} />,
              <DownloadOutlined key="download" onClick={() => downloadLogos(data.downloadLink)} />,
            ]}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotateY(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateY(0deg)';
            }}
          >
            <Meta
              title={data.title}
              description={data.description}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Logos;