import Navbar from "../components/navbar";
import { slideOne } from "../data/data";
import Footer from "../components/Footer";
// import image from '../image.png'

const Cheesa = () => {
  const data = [
    { key: "Holders", value: "100K +" },
    { key: "Integrations on the way", value: "50 +" },
    { key: "chains", value: "11" },
  ];
  const data2 = [
    { key: "Exchange", value: "11" },
    { key: "Developer", value: "21" },
    { key: "Socials ", value: "8" },
    { key: "DeFi  ", value: "10" },
  ];

  const projects = [
    {
      img: "/assets/7.png",
      title: "CHEESE DEX",
      text: "Best DEX For All CHEESE Lovers",
    },
    {
      img: "/assets/12.png",
      title: "CHEEY HAM PRIZE",
      text: "Prizes For All SOLANA Ecosystem Supporters",
    },
    { img: "/assets/10.png", title: "HAMSTER WHEEL RUN", text: "Run, and get Rewarded" },
  ];

  return (
    <div className="w-full">
      <div
        className="bg-half-170 !w-full px-4 d-table w-100"
        style={{
          // backgroundImage: "url('/assets/bg01.png')",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Navbar />
        <div className="bg-overlay bg-gradient-to-r from-[#f9f711] to-[#c3e010] !fixed !top-20 left-0 opacity-8">
          <video
            autoPlay
            loop
            muted
            src="/assets/6.mp4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="title-heading">
                <h1 className="fw-bold sm-m:text-center heading text-4xl">
                  CHEESA
                </h1>
                <h4 className="!text-2xl sm-m:text-center fw-bold mb-3">
                  Best Hamster, eating Cheese
                  {/* <TypeAnimation
                  sequence={[
                    "Musics",
                    1000,
                    "Musics",
                    1000,
                    "Illustrations",
                    1000,
                    "Videos",
                    1000,
                    "GIFs",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  cursor={false}
                  repeat={Infinity}
                  className="typewrite"
                /> */}
                </h4>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="card lg:!flex md:!flex !hidden nft-items nft-primary img-skewed rounded-md overflow-hidden mb-1">
                <img
                  src="/assets/9.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen lg:px-24 md:px-12 sm:px-12 px-8">
        <div className="col-12">
          <div className="slider">
            <div className="slider-t-2 whitespace-nowrap">
              {slideOne.map((item, index) => {
                return (
                  <div
                    className="mx-2 inline-block cursor-pointer lg:!w-24 lg:!h-24 md:!w-20 md:!h-20 sm:!w-16 sm:!h-16 !w-12 !h-12 rounded-full overflow-hidden"
                    key={index}
                  >
                    <img
                      src={item}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                );
              })}
              {slideOne.map((item, index) => {
                return (
                  <div
                    className="mx-2 inline-block cursor-pointer lg:!w-24 lg:!h-24 md:!w-20 md:!h-20 sm:!w-16 sm:!h-16 !w-12 !h-12 rounded-full overflow-hidden"
                    key={index}
                  >
                    <img
                      src={item}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                );
              })}
              {slideOne.map((item, index) => {
                return (
                  <div
                    className="mx-2 inline-block cursor-pointer lg:!w-24 lg:!h-24 md:!w-20 md:!h-20 sm:!w-16 sm:!h-16 !w-12 !h-12 rounded-full overflow-hidden"
                    key={index}
                  >
                    <img
                      src={item}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="row g-4">
            {data.map((dataItem, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card !bg-[#f9f711] py-10 shadow rounded-md overflow-hidden">
                    <div className="position-relative flex flex-col items-center text-center">
                      <span className="!font-bold lg:!text-5xl md:!text-4xl !text-3xl">
                        {dataItem.value}
                      </span>
                      <span className="lg:!text-2xl md:!text-xl !text-lg font-semibold mt-4 inline-block">
                        {dataItem.key}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card !bg-[#f9f711] sm-text-center w-full mt-20 w-full py-10 lg:px-10 md:px-8 px-4">
          <h2 className="lg:!text-4xl md:!text-3xl !text-2xl">About CHEESA</h2>
          <p>
            Cheesa serves as Solana's social layer and community meme coin,
            deeply integrated as a utility token across various applications and
            protocols within the Web3 ecosystem. Our goal is to expand our
            integration network across a wide range of platforms and protocols,
            fostering community engagement and utility.
          </p>
        </div>
        <div className="card !bg-[#f9f711] sm-text-center w-full mt-20 w-full p-10">
          <h1 className="lg:!text-4xl md:!text-3xl !text-2xl">Use CHEESA</h1>
          <h5 className="lg:!text-xl md:!text-xl !text-sm">
            50 Integrations and Counting
          </h5>
          <div className="mt-10">
            <div className="row g-4">
              {data2.map((dataItem, index) => {
                return (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="card !bg-[#c3e010] py-10 shadow rounded-md overflow-hidden">
                      <div className="position-relative flex flex-col items-center text-center">
                        <span className="!font-bold lg:!text-5xl md:!text-4xl !text-3xl">
                          {dataItem.value}
                        </span>
                        <span className="lg:!text-2xl md:!text-xl !text-lg font-semibold mt-4 inline-block">
                          {dataItem.key}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="card !bg-[#f9f711] sm-text-center w-full mt-20 w-full p-10">
          <h1 className="lg:!text-4xl md:!text-3xl !text-2xl">Get CHEESA</h1>
          <div className="lg:mt-10 md:mt-6">
            <div className="row g-4">
              <h3 className="lg:!text-2xl md:!text-xl !text-lg">
                DEXes and CEXes, available very soon TBC
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="lg:!text-4xl md:!text-3xl !text-2xl relative mb-6 sm-text-center">
            Key Projects
          </h1>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 xl:grid-row-1 lg:grid-row-2 gap-10">
            {projects.map((project, index) => {
              return (
                <div className="" key={index}>
                  <div className="card !bg-[#f9f711] px-4 !w-full !h-full py-10 shadow rounded-md overflow-hidden">
                    <div className="position-relative flex flex-col items-center text-center">
                      <div className="w-28 mx-auto rounded-full bg-[#c3e010] mb-3 h-28">
                        <img src={project.img} className="h-full" alt="" />
                      </div>
                      <span className="!font-bold lg:!text-4xl md:!text-3xl !text-2xl">
                        {project.title}
                      </span>
                      <span className="lg:!text-xl md:!text-xl !text-lg font-semibold mt-4 inline-block">
                        {project.text}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cheesa;
