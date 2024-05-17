import "./style/HomeDemo1.scss";

import {
  PartnersData,
  ServiceBlock,
  SingleCoolFact,
  timelineInfo,
} from "../../data/data-containers/data-HomeDemo1.js";

import { HomeDemo1RingsBg } from "../../utils/allImgs";

import Footer from "../../layouts/FooterPages";
import Header from "../../layouts/Header";

import SecOurFeatures from "./SecOurFeatures";
import SecOurRoadmap from "./SecOurRoadmap";
import SecPartners from "./SecPartners";
import SecTrust from "./SecTrust";
import SecWelcomeArea from "./SecWelcomeArea";

let HomeDemo1 = () => {
  return (
    <>
      <Header />
      <div className="HomeDemo1">
        <SecWelcomeArea />
        <SecTrust data={SingleCoolFact} />
        <SecOurRoadmap data={timelineInfo} />
        <SecOurFeatures
          data={ServiceBlock}
          video={"/assets/videos/3.mp4"}
          Rings={HomeDemo1RingsBg}
        />
        <SecPartners data={PartnersData} />
        <div className="w-full h-screen flex items-end lg:justify-center md:justify-center justify-start py-20 overflow-x-hidden">
          <div className="relative flex justify-start">
            <img
              src="/assets/images/3.png"
              className="rotate-90 absolute -top-[80%] left-1/2"
              alt=""
            />
            <img src="/assets/images/5.png" className="lg:w-full md:w-full w-80" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeDemo1;
