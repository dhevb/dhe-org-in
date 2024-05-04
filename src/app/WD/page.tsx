"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase';
import { collection, getDocs } from 'firebase/firestore';
import * as XLSX from 'xlsx';

interface WorkshopData {
  serial: number;
  name: string;
  Address: string;
  email: string;
  PhoneNumber: string;
  
}

const Page: React.FC = () => {
  const [formDataList, setFormDataList] = useState<WorkshopData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, 'Workshop');
        const querySnapshot = await getDocs(colRef);

        const dataList: WorkshopData[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data() as WorkshopData;
          dataList.push(data);
        });

        const dataListWithSerial = dataList.map((data, index) => ({
          ...data,
          serial: index + 1,
        }));

        setFormDataList(dataListWithSerial);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(formDataList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Workshop Data');
    XLSX.writeFile(workbook, 'workshop_data.xlsx');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center mt-4">
      <h2 className='text-primary text-xl font-bold'>Workshop Data</h2>
      <table className="border-collapse border m-6">
        <thead>
          <tr>
            <th className="border bg-primary text-white font-bold text-base p-3">Sr. No.</th>
            <th className="border bg-primary text-white font-bold text-base p-3">Name</th>
            <th className="border bg-primary text-white font-bold text-base p-3">Address</th>
            <th className="border bg-primary text-white font-bold text-base p-3">Email</th>
            <th className="border bg-primary text-white font-bold text-base p-3">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData) => (
            <tr key={formData.serial} className="border">
              <td className="border text-black p-3">{formData.serial}</td>
              <td className="border text-black p-3">{formData.name}</td>
              <td className="border text-black p-3">{formData.Address}</td>
              <td className="border text-black p-3">{formData.email}</td>
              <td className="border text-black p-3">{formData.PhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={exportToExcel} className="bg-primary text-white font-bold py-2 px-4 rounded mt-4">
        Export to Excel
      </button>
    </div>
  );
};

export default Page;
