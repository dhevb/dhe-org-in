// Example usage in another component or page
import CellInfo from '@/app/component/CellInfo';
import React from 'react';


const MyPage = () => {
  const dataArray = [
     {
        title: "Art Cell",
        objective:"The Art Sale Cell is dedicated to exploring new avenues of skills and startups within schools, specifically in the field of arts. Its primary objective is to develop innovative initiatives and opportunities in the realm of arts.",
        footnote:"Cultivating artistic expression and cultural appreciation"
    },
    // Add more data objects if needed
  ];

  return (
    <div className='bg-white'>
      
      <p className='text-center text-2xl font-bold p-4 text-primary-color '> Cells</p>
      {dataArray.map((data, index) => (
        <CellInfo
          key={index}
          title={data.title}
          objective={data.objective}
          footnote={data.footnote}
        />
      ))}
   
    </div>
  );
};

export default MyPage;
