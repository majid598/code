
const SecPartners = ({ data }) => {
  return (
    <section className="partners">
      <h3 className="text-white text-center mb-10 lg:!text-3xl md:!text-2xl sm:!text-xl text-lg px-4">
        Join our community of investors and partners as{" "}
        <br className="lg:block md:block hidden" /> we navigate the world of
        decentralized <br className="lg:block md:block hidden" /> finance
        together.
      </h3>

      <div className="container">
        <div className="flex flex-wrap gap-10 justify-center">
          {data &&
            data.map((item, key) => (
              <div className="w-44" data-aos="fade-up" key={key}>
                <div className="partner-box">
                  <img src={item.img} alt="" className="center-bock" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SecPartners;
