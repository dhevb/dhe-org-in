import BottomView from "./component/BottomView";
import CompanyInfo from "./component/CompanyInfo";
import Marquees from "./component/Marquees";
import MiddleComponent from "./component/MiddleComponent";
import SlideShow from "./component/SlideShow";

export default function Home() {
  const slides1 = [
    {
      src: "/2024K/k1.jpeg",
      alt: "Image 1",
      legend: "Image 1",
    },
    {
      src: "/2024K/k4.jpg",
      alt: "Image 1",
      legend: "Image 1",
    },
    {
      src: "/k3.JPG",
      alt: "Image 1",
      legend: "Image 1",
    },
    {
      src: "/sm1.jpg",
      alt: "Image 1",
      legend: "Image 1",
    },
    {
      src: "/sm2.JPG",
      alt: "Image 1",
      legend: "Image 1",
    },

    {
      src: "/12.jpeg",
      alt: "Image 1",
      legend: "Image 1",
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
