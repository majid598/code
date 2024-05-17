const ServiceBlock = ({ classIco, title, text }) => {
  return (
    <div className="services-block-four min-h-28 !flex !items-center">
      <div className="inner-box !flex !items-center">
        <div className="icon-box">
          <span className="text-3xl font-semibold">{classIco}</span>
        </div>
        <div>
          <h3>
            <a href="#">{title}</a>
          </h3>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
