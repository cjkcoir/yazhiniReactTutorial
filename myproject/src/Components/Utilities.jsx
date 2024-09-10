import PropTypes from "prop-types";
export const Title = ({ name }) => {
  // const{name}=props;
  return (
    <>
      <div className="text-center text-primary mt-3 h2">{name}</div>
    </>
  );
};

export const Conversion = ({ farhenheit }) => {
  return (
    <>
      <div className="text-center text-danger mt-3 h2">Conversion</div>

      <div className="text-center text-primary mt-3 h2">
        Temperature in Celcius = {((farhenheit - 32) * (5 / 9)).toFixed(0)}
      </div>
    </>
  );
};

export function AddTwoNumbers({ a, b }) {
  return (
    <div className="text-center text-warning mt-3 h2">
      {" "}
      The sum value ={a + b}
    </div>
  );
}

AddTwoNumbers.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number
}



Conversion.propTypes = {
  farhenheit: PropTypes.number,
};

Title.propTypes = {
  name: PropTypes.string,
};
