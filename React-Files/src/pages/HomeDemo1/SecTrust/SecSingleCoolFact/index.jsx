import SingleCoolFact from "./SingleCoolFact";

const SecSingleCoolFact = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, key) => (
          <SingleCoolFact key={key} title={item.title} value={item.value} />
        ))}
    </>
  );
};

export default SecSingleCoolFact;
