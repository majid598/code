import SecWelcomeContent from "./SecWelcomeContent";

const DIV = () => <div className="dream-blip blip1"></div>;

const SecWelcomeArea = () => {
  return (
    <section
      className="welcome_area clearfix dzsparallaxer auto-init ico fullwidth"
      data-options={{ direction: "normal" }}
      id="home"
    >
      <div className="absolute top-0 left-0 h-screen lg:!hidden py-10 !flex justify-start items-center w-full flex-col">
        <div>
          <img src="/assets/images/4.png" className="w-72" alt="" />
        </div>
        <div className="rounded-full w-64 h-64 overflow-hidden">
          <video
            src="/assets/videos/3.mp4"
            autoPlay
            muted
            loop
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="divimage dzsparallaxer--target Home1WelcomeAreaIMG"></div>

      <div className="hero-content dark-blue">
        {Array(4)
          .fill()
          .map((item, key) => (
            <DIV />
          ))}

        <div className="container h-100">
          <div className="row h-100 align-items-center lg:!text-start md:!text-start !text-center">
            <div className="col-12 col-lg-6 col-md-12">
              <SecWelcomeContent img={"/assets/images/6.png"} />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="main-ilustration !h-screen lg:!flex !hidden !bg-[url('/assets/images/6.png')]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecWelcomeArea;
