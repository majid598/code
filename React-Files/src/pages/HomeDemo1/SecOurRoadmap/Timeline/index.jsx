const Timeline = ({ timelineClass, title, text }) => {
  return (
    <div className={`${timelineClass} mt-10`}>
      <h3 className="text-start lg:!text-2xl md:!text-2xl !text-xl">{title}</h3>
      <p className="text-start lg:!text-sm md:!text-sm !text-xs">{text}</p>
    </div>
  );
};

export default Timeline;
