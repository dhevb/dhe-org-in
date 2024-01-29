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
    <footer className="bg-black p-4 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="font-semibold">Quick Links</h2>
            <ul className="mt-2">
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
              <a href="https://rase.co.in/" target="_blank">Shiksha Mahakumbh</a>
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
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Get in touch</h2>
           
            <p>director@dhe.org.in | dhe2021vb@gmail.com</p>
            <p>Department of Holistic Education, Vidya Bharti<br></br>Plot No. 1, Sector 71, SAS Nagar (Mohali) – 160071</p>
            <p>Mon.-Sat: 10 AM to 6 PM</p>
          </div>
          <div>
            <h2 className="font-semibold">Other Websites</h2>
            <ul className="mt-2">
              <li>
              <a href="http://vidyabharati.net" target="_blank">vidyabharati.net</a>

              </li>
              <li>
              <a href="http://vidyabhartialumni.org" target="_blank">vidyabhartialumni.org</a>
              </li>
              <li>
              <a href="https://swadeshibazaar.co.in/" target="_blank">swadeshibazaar.co.in</a>
              </li>
              <li>
              <a href="http://help.tredul.in/" target="_blank">tredul.in</a>
              </li>
              <li>
              <a href="http://punjabsuper100.com/" target="_blank">punjabsuper100.com</a>
              </li>
              <li>
              <a href="https://sarvatr.co.in/wp-login.php/" target="_blank">sarvatr.co.in</a>
              </li>
              <li>
              <a href="https://tudu.co.in/" target="_blank">tudu.co.in</a>
              </li>
            </ul>
          </div>
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
            ></iframe>
          </div>
        </div>
       <div className="flex flex-row justify-between">
  <div className="mt-4 text-white">
    &copy; {new Date().getFullYear()} Department of Holistic Education. All rights reserved.
  </div>

  <div className=" flex items-end ">
   
    <a
      href="https://www.facebook.com/profile.php?id=100090170940886&mibextid=ZbWKwL"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook}  className="text-white hover:text-blue-500 h-6 w-12" />
    </a>
    <a
      href="https://www.linkedin.com/company/department-of-holistic-education/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-white hover:text-blue-500 h-6 w-12" />
    </a>
    <a
      href="https://www.instagram.com/dhebharat?igsh=MWg4Z2hvOGV3b3I0dA=="
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white hover:text-orange-500 h-6 w-12" />
    </a>
    <a
            href="https://twitter.com/DHEBharat1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} size ="lg" className="text-white hover:text-oblue-500 h-6 w-12"  />
          </a>
          <Link
            href="https://www.kooapp.com/profile/DHEBharat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/koo-app.svg" alt ="koo" className="text-white hover:text-oblue-500 h-6 w-12"  height={100} width={100} />
          </Link>
  </div>
</div>



      </div>
    </footer>
  );
};

export default BottomView;
