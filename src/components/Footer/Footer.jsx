import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0c294c]">
      <footer className="footer max-w-7xl mx-auto p-10">
        <nav>
        <h6 className="footer-title border-b-2 text-white w-full">OUR LOCATION</h6>

          {/* Google map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47029.47447554039!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUyJzU5LjgiTiA3OMKwMjUnMzQuMCJF!5e0!3m2!1sen!2sus!4v1619569245969!5m2!1sen!2sus"
          
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </nav>
        <nav>
        <h6 className="footer-title border-b-2 w-full text-white">MAIN LINK</h6>
          <Link to={"/about"} className="link link-hover">About Page</Link>
          <Link to={"/"} className="link link-hover">Process</Link>
          <Link className="link link-hover">Infrastructure</Link>
          <Link className="link link-hover">Company Profile</Link>
        </nav>
        <nav>
        <h6 className="footer-title border-b-2 w-full text-white">OUR FACEBOOK PAGE</h6>
         {/* facebook */}
         <a href="https://www.facebook.com/RaipurAutoRiceMills" target="_blank" rel="noopener noreferrer" className="link link-hover">Visit our Facebook page</a>

        </nav>
        <nav>
        <h6 className="footer-title border-b-2 w-full text-white">GET IN TOUCH</h6>
          <Link className="link link-hover">Address : Kauga Road, Shimultola, Dinajpur 5200, Rangpur, Bangladesh</Link>
          <Link className="link link-hover">Whatsapp : +8801712552009</Link>
          <Link className="link link-hover">Email : info@raipurautoricemills.com</Link>
          <Link className="link link-hover">Facebook : fb.com/raipurautoricemills</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
