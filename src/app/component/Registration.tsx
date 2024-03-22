"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Registration: React.FC = () => {
    const [modal, setModal] = useState(false); 
    const toggleModal = () => {
        setModal(!modal)
    }
    useEffect(() => {
        if (modal) {
            document.body.classList.add("active-modal");
        } else {
            document.body.classList.remove("active-modal");
        }

        return () => {
            document.body.classList.remove("active-modal");
        };
    }, [modal]); 
  return (
    <div className="mx-6 sm:mx-14 my-6 border-2 border-blue-400 rounded-lg ">
      <div className="mt-6 text-center text-3xl sm:text-4xl font-bold text-primary">
        Registration Form
      </div>
      <div className="p-4 sm:p-8">
        <div className="flex flex-col  sm:flex-row gap-4">
          <input
            type="Name"
            name="name"
            className="my-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
            placeholder="Full Name *"
          />
          <input
            type="Name"
            name="name"
            className="my-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
            placeholder="School Name *"
          />
        </div>
        <div className="my-6 flex flex-col  sm:flex-row gap-4">
          <input
            type="tel"
            name="text"
            className="my-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
            placeholder="Mobile No. *"
          />
          <input
            type="email"
            name="email"
            className="my-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
            placeholder="Email *"
          />
        </div>
        <label className="my-6 flex flex-col  sm:flex-row gap-4">
          <select
            name="select"
            id="select"
            className="block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
          >
            <option className="font-semibold text-slate-300">Type</option>

            <option className="font-semibold text-slate-300">School</option>
            <option className="font-semibold text-slate-300">Teacher</option>
          </select>
          <input
            type="Name"
            name="name"
            className="my-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
            placeholder="Class *"
          />
        </label>
        <label className="my-6 flex flex-col  sm:flex-row gap-4">
          <select
            name="select"
            id="select"
            className="block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
          >
            <option className="font-semibold text-slate-300">How did you come to know about workshop: </option>

            <option className="font-semibold text-slate-300">Social Media</option>
            <option className="font-semibold text-slate-300">Through School</option>
            <option className="font-semibold text-slate-300">Friend</option>
          </select>
          <input
            type="text"
            name="name"
            className="my-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
            placeholder="Address *"
          />
        </label>
        <div className="flex gap-4">
          
          <input
            type="email"
            name="email"
            className="my-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"
            placeholder="Payable Amount 300/- "
          />
        </div>
        {/* <div>
          <textarea
            name="textarea"
            id="text"
            cols={30}
            rows={10}
            className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
            placeholder="Message"
          ></textarea>
        </div> */}
        
        <div className="pt-10 text-center">
          <button 
          onClick={toggleModal}
          className="cursor-pointer rounded-lg bg-primary-color px-8 py-5 text-sm font-semibold text-white">
            Click to Pay
          </button>
          
        </div>
         {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="fixed inset-0 bg-black opacity-60" onClick={toggleModal}></div>
          <div className="relative p-4 w-auto max-w-3xl">
            {/* Content of modal */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex justify-end p-2">
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-6 text-center">
                <Image src="/fee.png" alt="fee" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Registration;
