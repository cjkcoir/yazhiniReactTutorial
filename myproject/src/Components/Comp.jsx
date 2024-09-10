import PropTypes from "prop-types";
function Comp({ name, age, place }) {
  return (
    <>
      <div className="text-center text-primary mt-3 h2">Comp</div>

      <h4 className="text-center text-primary mt-3 h2">{name}</h4>
      <h4 className="text-center text-primary mt-3 h2">{age}</h4>
      <h4 className="text-center text-primary mt-3 h2">{place}</h4>
    </>
  );
}

Comp.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  place: PropTypes.string,
};

export default Comp;
