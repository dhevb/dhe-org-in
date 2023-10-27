import AdvisoryCouncil from "../component/AdvisoryCouncilComp";
import BottomView from "../component/BottomView";
import CompanyInfo from "../component/CompanyInfo";
import Header from "../component/Header";


const committeeMembers = [
  { name: "Dr. Thakur Sudesh Kumar Raunija", designation: "Patron", contact: "7627888222" },
  { name: "Smt. Pratibha Gupta", designation: "President", contact: "9814738016" },
  { name: "Shri Subhash Jain", designation: "Vice President", contact: "9878692912" },
  { name: "Shri Chander Has Gupta", designation: "Manager", contact: "9417050631" },
  { name: "Shri Desh Raj Sharma", designation: "General Secretary, Vidya Bharti (North Region)", contact: "9478000698" },
  { name: "Sh. Kulvir Sharma", designation: "Member", contact: "9818308384" },
  { name: "Sh. R.K. Chaudhary", designation: "Member", contact: "9814006245" },
  { name: "Shri. Aurag Biala", designation: "Member", contact: "9814808323" },
  { name: "Smt. Sonu Agnihotri Sharma", designation: "Member", contact: "9988690588" },
  { name: "Shri Anshul Bansal", designation: "Member", contact: "9058000045" },
  { name: "Ms. Maninder Kakkar", designation: "Member", contact: "9419248487" },
];


export default function Committee() {
  return (
    <>
    <CompanyInfo/>
    <Header />
    <AdvisoryCouncil title=" Working Committee" members={committeeMembers} />
    <BottomView />
  </>
  )
}
