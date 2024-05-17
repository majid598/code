import { FooterLogo, FooterPattern, FooterBg1 } from "../../utils/allImgs";

import "./footer.css";

import SecContact from "./SecContact";
import SecIco from "./SecIco";
import SecContent from "./SecContent";

const Footer = () => {
  return (
    <footer
      className="footer-area bg-[#c4043c]"
    >
      <div
        className="footer-content-area !flex !justify-between !items-center lg:!px-32 md:!px-16 sm:!px-12 !px-4"
      >
        <h4 className="text-white lg:!text-2xl md:!text-2xl sm:!text-xl !text-sm">All Rights Reserved @ Archmage</h4>
        <div>
          <a
            href="https://twitter.com/archm_a"
            target="_blank"
            className="lg:!p-3 md:!p-3 !p-2 rounded-md bg-[#0F0F12] flex items-center justify-center hover:scale-90 transition-all duration-300"
          >
            <i className="fa fa-twitter lg:!text-3xl md!text-3xl !text-2xl !text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
