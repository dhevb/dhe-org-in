import Image from "next/image";
import React from "react";

const Structure: React.FC = ()=>{

    return(
        <div className="text-center bg-white">
          <h2 className="text-2xl font-semibold pt-4 text-black">Department Structure</h2>
        <Image src="/structure.PNG" alt="Image" className=" mx-auto" />
        
      </div>
    )
} 

export default Structure;