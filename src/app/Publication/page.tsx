
import Publication from "../component/Publication";


export default function Home() {
  
      
  return (
    <div className="bg-white">
      <div>
        <div className="hidden sm:block">
          <Publication />
        </div>
        <div className="sm:hidden">
          <Publication />
        </div>
      </div>
    </div>
  );
}
