// Example usage in another component or page

import React from 'react';
import CellInfo from '@/app/component/CellInfo';

const MyPage = () => {
  const dataArray = [
   
    {
        title: "Event Management Cell",
        objective:"The Event Management Cell is dedicated to designing education-related events of national and international fame, aiming to establish Vidya Bharti's leadership in this dynamic field.",
        footnote:" Cultivating managerial skills and a sense of cultural pride along with opportunities to start starups."
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
