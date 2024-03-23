import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter as faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const BottomView: React.FC = () => {
  return (
    <footer className="bg-black p-4 text-white flex justify-between">
      <div className="container mx-auto">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-semibold">Location</h2>
            <iframe
              title="Department of Holistic Education"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.664555194807!2d76.70609041513317!3d30.699823379678664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1665005047090!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              className="mt-4"
            ></iframe>
          </div>
          <div>
            <h2 className="font-semibold">Quick Links</h2>
            <ul className="mt-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="https://rase.co.in/" target="_blank">
                  Shiksha Mahakumbh
                </a>
              </li>


              <li>
                <a href="#">Skill Development</a>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <a href="#">Vacancies</a>
              </li>
              <li>
                <a href="https://www.vidyabharatialumni.org/" target="_blank">
                  Vidya Bharti Alumni
                </a>
              </li> 
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Get in Touch</h2>

            <p className="mt-4">director@dhe.org.in | dhe2021vb@gmail.com</p>
            <p>
              Department of Holistic Education, Vidya Bharti<br></br>Plot No. 1,
              Sector 71, SAS Nagar (Mohali) – 160071
            </p>
            <p>Mon.-Sat: 10 AM to 6 PM</p>
          </div>
          <div>
            <h2 className="font-semibold">Other Websites</h2>
            <ul className="grid grid-cols-4 aspect-square mt-4">
              <li>
                <a href="https://vidyabharti.net/" target="_blank">
                  <Image
                    src="/vidyabharti.png"
                    alt="Vidya Bharti"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              {/* <li>
                <a href="https://www.vidyabharatialumni.org/" target="_blank">
                  <Image
                    src="/vidyabharti.png"
                    alt="Vidya Bharti"
                    height={40}
                    width={40}
                  />
                </a>
              </li> */}
              <li>
                <a href="https://swadeshibazaar.co.in/" target="_blank">
                  <Image
                    src="/sb.png"
                    alt="Vidya Bharti"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="http://help.tredul.in/" target="_blank">
                  <Image
                    src="/tre-dul.png"
                    alt="Vidya Bharti"
                    className="bg-white rounded-full"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              {/* <li>
                <a href="http://punjabsuper100.com/" target="_blank">
                  <Image
                    src="/dhe.png"
                    alt="Vidya Bharti"
                    height={40}
                    width={40}
                  />
                </a>
              </li> */}
              <li>
                <a href="https://sarvatr.co.in/wp-login.php/" target="_blank">
                  <Image
                    src="/sarvatra.png"
                    alt="sarvatr"
                    className="bg-white rounded-full"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://tudu.co.in/" target="_blank">
                  <Image src="/tuduu.png" alt="tudu" height={40} width={40} />
                </a>
              </li>
              <li>
                <a href="https://www.rase.co.in/" target="_blank">
                  <Image
                    src="/shiksha.png"
                    alt="Shiksha Mahakumbh"
                    className="bg-white rounded-full"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://poojawala.in/" target="_blank">
                  <Image
                    src="/pooja.png"
                    alt="Pooja wala"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.alltemples.org.in/" target="_blank">
                  <Image
                    src="/holistic.jpeg"
                    alt="Holistic Harbour"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.dhe.org.in/" target="_blank">
                  <Image
                    src="/logo.png"
                    alt="DHE"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://vi.rase.co.in/" target="_blank">
                  <Image
                    src="/vi.png"
                    alt="Viksit India"
                    className="bg-white rounded-full p-1"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://jobs360degree.com/" target="_blank">
                  <Image
                    src="/job360.png"
                    alt="Job360"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.itrchandigarh.org/" target="_blank">
                  <Image
                    src="/logo 2.png"
                    alt="VB-ITR"
                    height={40}
                    width={40}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="my-4 text-white">
            &copy; Department of Holistic Education.
          </div>

          <div className=" flex items-end my-4">
            <a
              href="https://www.facebook.com/profile.php?id=100090170940886&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white hover:text-blue-500 h-6 w-12"
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
                className="text-white hover:text-blue-500 h-6 w-12"
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
                className="text-white hover:text-orange-500 h-6 w-12"
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
                className="text-white hover:text-blue-500 h-6 w-12"
              />
            </a>
            <Link
              href="https://www.kooapp.com/profile/DHEBharat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/koo-app.svg"
                alt="koo"
                className="text-white hover:text-yellow-500 h-6 w-12"
                height={100}
                width={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomView;
