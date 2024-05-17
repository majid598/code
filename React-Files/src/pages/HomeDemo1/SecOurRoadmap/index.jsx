import SectionHeading from "../../../components/SectionHeading";
import Timeline from "./Timeline";

const SecOurRoadmap = ({ data }) => {
  return (
    <section className="roadmap relative" style={{ paddingBottom: 0 }} id="roadmap">
      <div className="absolute  lg:top-0 lg:block hidden top-20 right-0 ">
        <img src="/assets/images/2.png" alt="" />
      </div>
      
      <div className="lg:w-1/3 md:w-2/3 w-full mx-auto">
        <SectionHeading title="Unraveling Archimedes Value Proposition" />
      </div>
      <div className="container">
        <div className="row">
          <div className="timeline-split">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="timeline section-box-margin">
                {data &&
                  data.map((item, key) => (
                    <Timeline
                      key={key}
                      timelineClass={item.timelineClass}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute !-bottom-28 lg:block hidden right-0 ">
        <img src="/assets/images/3.png" alt="" />
      </div>
    </section>
  );
};

export default SecOurRoadmap;
