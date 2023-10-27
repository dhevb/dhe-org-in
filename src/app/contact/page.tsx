import BottomView from "../component/BottomView";
import ContactUs from "../component/ComactUs";
import CompanyInfo from "../component/CompanyInfo";
import Header from "../component/Header";


const advisoryMembers = [
  { name: "", designation: "", contact: "" }
];


export default function Committee() {
  return (
    <>
    <CompanyInfo/>
    <Header />
    <ContactUs/>
     <BottomView />
  </>
  )
}
