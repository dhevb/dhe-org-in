'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import * as XLSX from 'xlsx'; // Import XLSX library

interface WorkshopData {
  name: string;
  Address: string;
  email: string;
  PhoneNumber: string;
  School: string;
  Services: string;
  type: string;
  class: string;
  Attachments: string;
  select: string;
}

const Page: React.FC = () => {
  const [formDataList, setFormDataList] = useState<WorkshopData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, 'Workshop');
        const q = query(colRef, orderBy('serialNumber', 'asc'));
        const querySnapshot = await getDocs(q);

        const dataList: WorkshopData[] = [];
        const emptyEntries: WorkshopData[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data() as WorkshopData;
          if (Object.values(data).some(value => value !== "")) {
            dataList.push(data);
          } else {
            emptyEntries.push(data);
          }
        });

        dataList.sort((a, b) => a.name.localeCompare(b.name)); // Sort non-empty entries alphabetically by name

        setFormDataList([...dataList, ...emptyEntries]); // Concatenate non-empty entries with empty entries
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  // Function to export data to Excel
  const exportToExcel = () => {
    const fileName = "workshop_data.xlsx";
    const ws = XLSX.utils.json_to_sheet(formDataList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Workshop Data");
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className="bg-white flex flex-col justify-center p-6 ">
      {formDataList.length === 0 && <div className="text-black">loading....</div>}
      {formDataList.length > 0 && (
        <>
          <table className="border-collapse border">
            <thead>
              <tr>
                <th className="border bg-primary p-2">S.No</th>
                <th className="border bg-primary p-2">Name</th>
                <th className="border bg-primary p-2">Adress</th>
                <th className="border bg-primary p-2">Email</th>
                <th className="border bg-primary p-2">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {formDataList.map((formData, index) => (
                <tr key={index} className="border">
                  <td className="border text-black p-2">{index + 1}</td>
                  <td className="border text-black p-2">{formData.name}</td>
                  <td className="border text-black p-2">{formData.Address}</td>
                  <td className="border text-black p-2">{formData.email}</td>
                  <td className="border text-black p-2">{formData.PhoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={exportToExcel} className="mt-4 bg-primary hover:bg-white hover:text-primary text-white font-bold py-2 px-4 rounded">Export to Excel</button>
        </>
      )}
    </div>
  );
};

export default Page;
