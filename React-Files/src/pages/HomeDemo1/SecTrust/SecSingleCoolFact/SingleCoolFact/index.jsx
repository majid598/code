const SingleCoolFact = ({ title, value }) => {
  return (
    <div className="w-full" data-aos="fade-up">
      <div className="trust-item !py-14 text-center text-white !px-2">
        <div className="">
          <h3 className="lg:!text-3xl md:!text-3xl sm:!text-2xl !text-lg">{title}</h3>
        </div>
        <div className="">{value}</div>
      </div>
    </div>
  );
};

export default SingleCoolFact;
