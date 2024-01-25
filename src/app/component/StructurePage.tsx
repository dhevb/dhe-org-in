import Image from "next/image";
import React from "react";

const Structure: React.FC = ()=>{

    return(
        <div className="text-center bg-white">
          <h2 className="text-2xl font-semibold pt-4 text-primary-color">Department Structure</h2>
        <Image src="/structure.PNG" alt="Image" className=" mx-auto" height={1000} width={1000} />
        
      </div>
    )
} 

export default Structure;