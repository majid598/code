import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="h-screen relative flex items-end justify-center py-16 pt-32">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="/assets/12.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="w-full min-h-72 !bg-transparent py-10 lg:px-10 md:px-8 sm:px-6 px-2 card my-shadow relative !rounded-xl flex lg:!flex-row md:!flex-row flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="lg:w-80 md:w-60 w-24 lg:relative md:relative absolute bottom-10 left-0">
            <img
              src="/assets/9.png"
              className="w-full lg:block md:block hidden"
              alt=""
            />
            <img
              src="/assets/8.png"
              className="w-full lg:hidden md:hidden block"
              alt=""
            />
          </div>
          <div className="w-full flex justify-between left-0 items-center absolute lg:bottom-4 md:bottom-3 sm:bottom-3 bottom-2 px-4">
              <span className="lg:text-2xl font-semibold md:text-xl text-sm lg:tracking-normal md:tracking-normal sm:tracking-normal tracking-tight">
                All Rights Reserved &copy; CHEESA
              </span>
            <div>
              <a
                href="https://twitter.com/cheesa_chees"
                target="_blank"
                className="lg:p-3 md:p-3 p-2 inline-block transition-all duration-300 hover:-translate-y-3 text-white rounded-md bg-zinc-700"
              >
                <FaTwitter className="lg:text-3xl md:text-3xl text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
