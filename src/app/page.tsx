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
      src: "/2024K/k2.jpeg",
      alt: "Image 1",
      legend: "Image 1",
    },
    {
      src: "/2024K/k3.jpg",
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
      src: "/9.JPG",
      alt: "Image 1",
      legend: "Image 1",
    },

    {
      src: "/7.jpg",
      alt: "Image 1",
      legend: "Image 1",
    },

    {
      src: "/5.jpg",
      alt: "Image 1",
      legend: "Image 1",
    },
    {
      src: "/4.jpg",
      alt: "Image 1",
      legend: "Image 1",
    },

    {
      src: "/2.jpg",
      alt: "Image 1",
      legend: "Image 1",
    },
    {
      src: "/1.jpg",
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
    <div className="flex flex-row space-x-4">
      <div className="w-1/5"></div>
      <div className="w-3/5">
        <SlideShow slides={slides1} />
        <MiddleComponent />
      </div>
      <div className="w-1/5"></div>
    </div>
  );
  return (
    <div className="bg-white">
      <CompanyInfo />
      <Header />
      <div>
        {/* Show Mobile or Desktop View based on screen size */}
        <div className="sm:hidden">
          <MobileView />
        </div>
        <div className="hidden sm:block">
          <DesktopView />
        </div>
      </div>
      <BottomView />
    </div>
  );
}
