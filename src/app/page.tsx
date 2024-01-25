import BottomView from "./component/BottomView";
import CompanyInfo from "./component/CompanyInfo";
import Header from "./component/Header";
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
    {
      src: "/mc1.jpeg",
      alt: "Image 1",
      legend: "Image 1",
    },
  ];
  const MobileView = () => (
    <div className="flex flex-col space-y-4 items-center">
      <SlideShow slides={slides1} />
      <MiddleComponent />
      <div></div>
      <div className="items-center"></div>
      <div></div>
      <div></div>
    </div>
  );

  // Components for Desktop View
  const DesktopView = () => (
    <div className="flex flex-col md:flex-row space-x-4 space-y-4">
    <div className="flex flex-col md:flex-row w-full">
      <SlideShow slides={slides1} />
      <MiddleComponent />
    </div>
  </div>
  
  
  );
  return (
    <div className="bg-white">
      
      <div>
        {/* Show Mobile or Desktop View based on screen size */}
        <div className="sm:hidden">
          <MobileView />
        </div>
        <div className="hidden sm:block">
          <DesktopView />
        </div>
      </div>
    
    </div>
  );
}
