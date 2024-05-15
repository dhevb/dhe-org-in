import BottomView from "./component/BottomView";
import CompanyInfo from "./component/CompanyInfo";
import Marquees from "./component/Marquees";
import MiddleComponent from "./component/MiddleComponent";
import SlideShow from "./component/SlideShow";

export default function Home() {
  const slides1 = [
    {
      src:"/2024K/k6.jpg",
      alt:"Dr. Thakur SKR, Sci/Engr-SF at ISRO and Director of the Department of Holistic Education & Vidya Bharti Institute of Training and Research, along with Prof. Rajeev Ahuja, Director of IIT Ropar, had the honor of meeting Smt. Droupadi Murmu, the Hon’ble President of India, regarding the Shiksha Mahakumbh 2024.",
      legend:""
    },
    {
      src:"/R1.jpeg",
      alt:"DHE की HEI को-ऑर्डिनेशन सेल  ने मार्च 11, 2024 को राष्ट्रीय स्तर के संस्थान INST मोहाली के साथ शिक्षा के क्षेत्र में संयुक्त रूप से कार्य करने के लिए एक MoU साइन किया। IIT रोपड, NIT जालंधर, सेंट्रल यूनिवर्सिटी भटिंडा, DAV यूनिवर्सिटी जालंधर, के बाद DHE का ये पाँचवा MoU है। इस मौक़े पर विद्या भारती उत्तर क्षेत्र के संगठन मंत्री माननीय विजय नड्डा जी, ISRO के वरिष्ठ वैज्ञानिक एवं DHE & VBITR के निदेशक डॉक्टर सुदेश जी, INST के निदेशक प्रो. अमिताव पात्रा जी एवं INST में डीन डॉक्टर इंद्रनिल सरकार मौजूद रहे।",
      legend:""
    },
    {
      src: "/2024K/k1.jpeg",
      alt: "",
      legend: "",
    },
    {
      src: "/2024K/k4.jpg",
      alt: "",
      legend: "",
    },
    {
      src: "/k3.JPG",
      alt: "",
      legend: "",
    },
    {
      src: "/sm1.jpg",
      alt: "",
      legend: "",
    },
    {
      src: "/sm2.JPG",
      alt: "",
      legend: "",
    },

    {
      src: "/12.jpeg",
      alt: "",
      legend: "",
    },
    
  ];
  const MobileView = () => (
    <div className="flex flex-col space-y-4 items-center">
      <SlideShow slides={slides1} />
      <Marquees/>
      <MiddleComponent />
    </div>
  );

  // Components for Desktop View
  const DesktopView = () => (
    <div className="flex flex-col md:flex-row space-x-4 space-y-4">
    <div className="flex flex-col md:flex-row w-1/2">
      <SlideShow slides={slides1} />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4330032354977759"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4330032354977759"
        data-ad-slot="6774265057"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
   
   
    </div>
    <div className="flex flex-col md:flex-row w-1/2">
    <MiddleComponent />
    </div>
  </div>
  
  
  );
  return (
    <div className="bg-white">
      
      <div>
        {/* Show Mobile or Desktop View based on screen size */}
        <div className="sm:hidden">
          <div className="flex flex-col space-y-4 items-center">
            <SlideShow slides={slides1} />
            <Marquees/>
            <MiddleComponent />
          </div>
        </div>
        <div className="hidden sm:block">
          <Marquees/>
          <DesktopView />
        </div>
      </div>
    
    </div>
  );
}
