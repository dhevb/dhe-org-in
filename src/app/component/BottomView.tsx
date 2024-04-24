import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter as faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const BottomView: React.FC = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#f8e6e1] text-center text-black lg:text-left">
        {/* DHE's logos */}
        <div className="flex flex-wrap justify-between items-center text-center border-b-2 border-gray-700 p-2 lg:justify-between">
          <hr />
          <div className=" items-start mr-auto ml-2 mb-3 lg:block text-black font-bold">
            <span>Department of Holistic Education</span>
          </div>
          {/* Logos */}
          <div className="flex justify-center flex-wrap">
            <a
              href="https://www.dhe.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="logo.png" alt="dhe" className="h-10 w-10 mr-4" />
            </a>
            {/* RASE */}
            <a
              href="https://www.rase.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/shiksha.png"
                alt="rase"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* VIDHYA BHARTI */}
            <a
              href="https://vidyabharti.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/vidyabharti.png"
                alt="vidya"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* SARVATR */}
            <a
              href="https://www.sarvatr.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/sarvatra.png"
                alt="sarvatr"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* Temple */}
            <a
              href="https://www.alltemples.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/holistic.jpeg"
                alt="temple"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* Job360 */}
            <a
              href="https://jobs360degree.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/job360.png"
                alt="job"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* Poojawala */}
            <a
              href="https://poojawala.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pooja.png"
                alt="pooja"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* Swadeshi Bazar */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="/sb.png"
                alt="Logo Alt Text"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* Tredul */}
            <a
              href="https://tredul.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/tre-dul.png"
                alt="tredul"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* ITR */}
            <a
              href="https://www.itrchandigarh.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logo 2.png" alt="itr" className="h-10 w-10 mr-4" />
            </a>
            {/* Vikas India */}
            <a
              href="https://vi.rase.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/vi.png"
                alt="vikas"
                className="h-10 w-10 mr-4"
              />
            </a>
          </div>
        </div>

        {/* Help, Useful Links, Contact, Follow Us */}
        <div className=" p-3 m-6 text-center md:text-left">
          <div className="flex flex-row flex-wrap justify-between">
            {/* Help section */}
            <div className="flex flex-col text-center">
              <h6 className="mb-3 text-center justify-center font-bold uppercase md:justify-center text-black ">
                Quick Links
              </h6>
              <div className="flex flex-row">
                <div className="text-left lg:block mr-4">
                  <p className="text-black mb-3 ">
                    <Link href="/" className="hover:text-primary">
                      Home
                    </Link>
                  </p>
                  <p className="text-black mb-3">
                    <Link href="" className="hover:text-primary">
                      About Us
                    </Link>
                  </p>
                  <p className="text-black mb-3">
                    <Link href="/" className="hover:text-primary">
                      Projects
                    </Link>
                  </p>
                  <p className="text-black mb-3">
                    <Link
                      href="https://rase.co.in/"
                      className="hover:text-primary"
                    >
                      Shiksha Mahakumbh
                    </Link>
                  </p>
                </div>

                <div className="text-left lg:block">
                  <p className="text-black mb-3">
                    <Link href="" className="hover:text-primary">
                      Skill Development
                    </Link>
                  </p>
                  <p className="text-black mb-3">
                    <Link href="/contact" className="hover:text-primary">
                      Contact Us
                    </Link>
                  </p>
                  <p className="text-black mb-3">
                    <Link href="" className="hover:text-primary">
                      Vacancies
                    </Link>
                  </p>
                  <p className="text-black mb-3">
                    <Link href="" className="hover:text-primary">
                      Vidya Bharti Alumni
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* Contact section */}
            <div>
              <div className="md:w-48 lg:w-64 pl-4 pr-4 font-semibold mb-4">
                <h6 className="mb-3 flex justify-center font-bold uppercase md:justify-start text-black ">
                  Contact Us
                </h6>
                <form className="max-w-lg mx-auto mb-2">
                  <div className="mb-0">
                    <label
                      className="block text-sm font-bold mb-1 text-black "
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border rounded-md py-2 px-2 text-black "
                      placeholder="abc@example.com"
                    />
                  </div>
                  <div className="mb-0">
                    <label
                      className="block text-sm font-bold mb-1 text-black "
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={1}
                      className="w-full border rounded-md py-2 px-2"
                      placeholder="Your message here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white h-auto w-auto py-2 px-2 rounded-md hover:bg-white hover:text-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Follow Us and Map */}
            <div className="">
              {/* Follow Us */}
              <h6 className="mb-3 flex justify-center font-semibold uppercase md:justify-start text-black">
                Follow Us
              </h6>
              {/* Include Map */}
              <div className="mt-6  flex items-center justify-center md:justify-start ">
                <iframe
                  className="w-42 h-30 border border-gray-400 mb-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6604613704103!2d76.70609037438652!3d30.699827987224253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1708812880069!5m2!1sen!2sin"
                ></iframe>
              </div>
              {/* Social media icons */}
              <div className="flex items-center justify-center md:justify-start">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100090170940886&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-black hover:text-blue-500 h-6 w-12"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/department-of-holistic-education/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className="text-black hover:text-blue-500 h-6 w-12"
                  />
                </a>
                <a
                  href="https://www.instagram.com/dhebharat?igsh=MWg4Z2hvOGV3b3I0dA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    className="text-black hover:text-orange-500 h-6 w-12"
                  />
                </a>
                <a
                  href="https://twitter.com/DHEBharat1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    size="lg"
                    className="text-black hover:text-blue-500 h-6 w-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="bg-neutral-900 p-4 text-center ">
          <span className="text-white">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.dhe.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Department of Holistic Education.
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default BottomView;
