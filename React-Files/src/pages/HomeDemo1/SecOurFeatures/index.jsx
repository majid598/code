import SectionHeading from "../../../components/SectionHeading";
import ServiceBlock from "./ServiceBlock";

const SecOurFeatures = ({ data, video, Rings }) => {
  return (
    <section className="features section-padding-100">
      <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
        <SectionHeading title="Elevate your yields in DeFi by leveraging your favorite pools." />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
            {data &&
              data.map((item, key) => (
                <ServiceBlock
                  key={key}
                  classIco={item.classIco}
                  title={item.title}
                  text={item.text}
                />
              ))}
          </div>
          <div className="service-img-wrapper flex justify-center col-lg-6 col-md-12 col-sm-12">
            <div className="rounded-full overflow-hidden">
              <video
                autoPlay
                loop
                muted
                src={video}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecOurFeatures;
