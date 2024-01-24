import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter as faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
            <h2 className="font-semibold">Contact Us</h2>
            <p className="mt-2">7627888222 | 7903431900 | 9417050631</p>
            <p>director@dhe.org.in | dhe2021vb@gmail.com</p>
            <p>Vidya Bharti<br></br>Plot No. 1, Sector 71, SAS Nagar (Mohali) – 160071</p>
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

  <div className="mt-4 flex items-end space-x-4 bg-white">
    <a
      href="https://twitter.com/raseconferences"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-white hover:text-blue-500" />
    </a>
    <a
      href="https://www.facebook.com/raseconferences/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} size="lg" className="text-white hover:text-blue-500" />
    </a>
    <a
      href="https://www.linkedin.com/in/rase-conferences-3a4b71270"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-white hover:text-blue-500" />
    </a>
    <a
      href="https://www.instagram.com/shikshamahakumbh/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white hover:text-blue-500" />
    </a>
  </div>
</div>


      </div>
    </footer>
  );
};

export default BottomView;
