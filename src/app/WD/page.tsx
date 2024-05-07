"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase';
import { collection, getDocs } from 'firebase/firestore';
import * as XLSX from 'xlsx';
import { useQRCode } from 'next-qrcode';
import { jsPDF } from 'jspdf'; // Import jsPDF
import autoTable from 'jspdf-autotable';
import QRCode from 'qrcode';


// Define the WorkshopData interface
interface WorkshopData {
  serial: number;
  name: string;
  Address: string;
  email: string;
  PhoneNumber: string;
}


const downloadAsPDF = async (formDataList: WorkshopData[]) => {
  // Generate PDF
  const doc = new jsPDF("landscape"); // No need to specify orientation here
  
  const tableColumn = ["Sr. No.", "Name", "Address", "Email", "Contact Number"];
  const tableRows: any[][] = [];

  formDataList.forEach(formData => {
    const data = [
      formData.serial.toString(),
      formData.name,
      formData.Address,
      formData.email,
      formData.PhoneNumber
    ];
    tableRows.push(data);
  });

  const pageHeight = doc.internal.pageSize.height;
  let currentY = 40;
  let currentRow = 0;

  // Function to add QR code for a row
  const addQRCodeForRow = async (formData: WorkshopData, yPos: number) => {
    const qrCanvas = document.createElement('canvas');
    await QRCode.toCanvas(qrCanvas, JSON.stringify(formData), { errorCorrectionLevel: 'M', margin: 3, scale: 4 });
    const qrDataUrl = qrCanvas.toDataURL('image/png');
    doc.addImage(qrDataUrl, 'PNG', 15, yPos - 3, 20, 20);
  };

  while (currentRow < formDataList.length) {
    // Add row to table
    autoTable(doc, {
      head: [tableColumn],
      body: [tableRows[currentRow]],
      startY: currentY,
      theme: 'grid'
    });

    // Add QR code for the current row
    await addQRCodeForRow(formDataList[currentRow], currentY + 20);

    // Move to the next row and adjust Y position
    currentRow++;
    currentY += 40; // increase for the row height and space for QR code

    // Check if there's enough space for the next row and QR code
    if (currentY + 40 > pageHeight) {
      doc.addPage(); // No need to specify orientation here
      currentY = 40; // reset Y position for new page
    }
  }

  // Save PDF
  doc.save('workshop_data.pdf');
};



const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { Canvas } = useQRCode();
  const [formDataList, setFormDataList] = useState<WorkshopData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const exportToExcel = () => {
    const filteredData = formDataList.map(({ serial, name, Address, email, PhoneNumber }) => ({
      'Sr. No.': serial,
      'Name': name,
      'Address': Address,
      'Email': email,
      'Contact Number': PhoneNumber
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(filteredData);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Workshop Data');

    XLSX.writeFile(workbook, 'workshop_data.xlsx');
  };
  

  // Function to download data as PDF
  const downloadPDF = () => {
    // Use the provided downloadAsPDF function
    downloadAsPDF(formDataList);
  };

  return (
    <>
      {loading && <div className='min-h-screen flex flex-col justify-center items-center mt-4 text-black '>loading...</div>}
      {!loading && 
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
                <th className="border bg-primary text-white font-bold text-base p-3">QR</th>
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
                  <td className="border text-black p-3">
                    {formData.name ? (
                      <Canvas
                        text={JSON.stringify(formData)}
                        options={{
                          errorCorrectionLevel: 'M',
                          margin: 3,
                          scale: 4,
                          width: 200,
                          color: {
                            dark: '#000000',
                            light: '#e8f0f0',
                          },
                        }}
                      />
                    ) : (
                      <span>No data available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={exportToExcel} className="bg-primary text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Export to Excel
          </button>
          <button onClick={downloadPDF} className="bg-primary text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Export to PDF
          </button>
        </div>
      }
    </>
  );
};

export default Page;
