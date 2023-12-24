import BottomView from "../component/BottomView";
import CompanyInfo from "../component/CompanyInfo";
import Header from "../component/Header";
import Publication from "../component/Publication";


export default function Home() {
    const MobileView = () => (
        <div className="flex flex-col space-y-4 items-center">
          <Publication />
          {/* Remove unnecessary div elements */}
        </div>
      );
      
      const DesktopView = () => (
        <div className="flex flex-row space-x-4">
          <div className="w-1/5"></div>
          <div className="w-3/5">
            <Publication />
          </div>
          <div className="w-1/5"></div>
        </div>
      );
      
  return (
    <div className="bg-white">
      <CompanyInfo/>
      <Header />
      <div>
        {/* Show Mobile or Desktop View based on screen size */}
        <div className="hidden sm:block">
          <DesktopView />
        </div>
        <div className="sm:hidden">
          <MobileView />
        </div>
      </div>
      <BottomView />
    </div>
  );
}
