import BottomView from "../component/BottomView";
import MembershipBenefits from "../component/MembershipBenefits";
import CompanyInfo from "../component/CompanyInfo";
import Header from "../component/Header";
import MemberShipForm from "../component/MemberShipForm";




export default function Committee() {
  return (
    <>
    <CompanyInfo/>
    <Header />
    <MembershipBenefits/>
   
     <BottomView />
  </>
  )
}
