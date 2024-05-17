import SectionHeading from '../../../components/SectionHeading';
import SecSingleCoolFact from './SecSingleCoolFact';

const SecTrust = ({data}) => {

  return (
    <section className="trust-section section-padding-100">     
        <SectionHeading title={"Stay tuned for upcoming features"}/>
        <div className="xl:!px-32 lg:!px-16 md:!px-12 !px-3">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
                <SecSingleCoolFact data={data}/>
            </div>
        </div>
    </section>
  );
}

export default SecTrust;