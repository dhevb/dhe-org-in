import BottomView from "./component/BottomView";
import CompanyInfo from "./component/CompanyInfo";
import Header from "./component/Header";
import MiddleComponent from "./component/MiddleComponent";

export default function Home() {
  return (
    <>
      <CompanyInfo />
      <Header />
      <MiddleComponent />
      <BottomView />
    </>
  );
}
