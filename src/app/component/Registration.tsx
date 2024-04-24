"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import toast from "react-hot-toast";

interface WorkShopData {
  name: string;
  Address: string;
  email: string;
  PhoneNumber: string;
  School: string;
  Services: string;
  type: string;
  Attachments: string;
  class: string;
  select: string;
}

const Registration = () => {
  const initialFormData: WorkShopData = {
    name: "",
    Address: "",
    email: "",
    PhoneNumber: "",
    School: "",
    Services: "",
    type: "",
    class: "",
    Attachments: "",
    select: "",
  };

  const [formData, setFormData] = useState<WorkShopData>(initialFormData);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const handleAddDocument = async (downloadURL: string | null) => {
    try {
      const docRef = await addDoc(collection(db, "Workshop"), {
        ...formData,
        feeReceipt: downloadURL,
      });
      console.log("Document added with ID:", docRef.id);
      setLoading(false);
      setFormData(initialFormData);
      toast.success(
        "Congratulations you have successfully enrolled for one-day workshop! "
      );
    } catch (error) {
      setLoading(false);
      toast.error("Something broke while registration!");
      console.error("Error adding document:", error);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const membershipFee = formData.type === "vb" ? 2500 : 1000;

    if (image) {
      try {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);

        const downloadURL = await getDownloadURL(imageRef);

        setFormData((prevData) => ({
          ...prevData,
          feeReceipt: downloadURL || "",
          fee: membershipFee,
        }));

        handleAddDocument(downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
        setLoading(false);
      }
    } else {
      handleAddDocument(null);
    }

    console.log(formData);
  };

  return (
    <div className="bg-white mb-5">
      <div className=" shadow-md rounded-md md:w-1/3 mx-auto pt-8 bg-white text-black">
        <h1 className="text-primary text-center text-xl ">
          Workshop Registration
        </h1>
        <form onSubmit={handleSubmit} className="bg-white p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="*Your full name*"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="*your@example.com*"
              onChange={handleInputChange}
              className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="PhoneNumber"
              placeholder="*1234567890*"
              value={formData.PhoneNumber}
              onChange={handleInputChange}
              className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              School Name
            </label>
            <input
              type="tel"
              name="School"
              value={formData.School}
              placeholder="*ABC high School*"
              onChange={handleInputChange}
              className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              {" "}
              Address
            </label>
            <input
              name="Address"
              type="text"
              value={formData.Address}
              placeholder="*Street, City, State, Country*"
              onChange={handleInputChange}
              className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              How did you come to know about the workshop:
            </label>
            <select
              name="select"
              value={formData.select}
              onChange={handleInputChange}
              className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
            >
              <option value="">Select Option</option>
              <option value="Social Media">Social Media</option>
              <option value="Through School">Through School</option>
              <option value="Friend">Friend</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Type
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
              >
                <option value="">Select Type</option>
                <option value="vb">Student</option>
                <option value="nvb">Teacher/Principle</option>
                <option value="mvb">Management</option>
              </select>
            </label>
          </div>

          {formData.type && (
            <>
              {formData.type === "vb" && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Class
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={formData.class}
                    placeholder="*Your class*"
                    onChange={handleInputChange}
                    className="mt-4 p-2 block w-full rounded-md border border-gray-300 text-black"
                  />
                </div>
              )}
              <div className="text-sm text-gray-600 mb-4">
                Note: Registration will be valid only if you upload the payment
                receipt successfully. The registration amount displayed above
                the &#34;Pay Now&#34; button must be paid. Without that, the
                registration will be canceled.
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  <b>₹: {formData.type === "vb" ? 500 : 1000}</b>
                  {/* <a
                    href="https://pay.jodo.in/pages/KFEUFQRASGBHzBk2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-color transition duration-300 mt-2 block text-center"
                  >
                    Pay Now
                  </a> */}
                  <img className="p-2" src="/fee.png" alt="Fee" />
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Upload Payment Receipt
                </label>
                <input
                  type="file"
                  name="Attachments"
                  accept=".pdf, .png, .jpg"
                  onChange={handleImageChange}
                  className="mt-4 p-2 block w-full rounded-md border-gray-300 text-black bg-white"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-color transition duration-300 mt-4 w-full"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
