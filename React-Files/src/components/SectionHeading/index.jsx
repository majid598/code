const Span = () => <span></span>;

const SectionHeading = ({ title, text }) => {
  return (
    <div className="section-heading text-center">
      <div
        className="dream-dots justify-content-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {Array(7)
          .fill()
          .map((item, key) => (
            <Span key={key} />
          ))}
      </div>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        className="xs:text-2xl !font-medium px-4 tracking-tight text-white"
      >
        {title}
      </h2>
      <p data-aos="fade-up" data-aos-delay="400">
        {text}
      </p>
    </div>
  );
};

export default SectionHeading;
