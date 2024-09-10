import DrillingCompTwo from "./DrillingCompTwo";
import PropTypes from 'prop-types';


function DrillingCompOne({user}) {
    console.log(user);
  return (
    <>
      <div className="text-center text-primary mt-3 h2">DrillingCompOne</div>
      <DrillingCompTwo user={user}></DrillingCompTwo>
    </>
  );
}

// Prop types validation
DrillingCompOne.propTypes = {
    user: PropTypes.string.isRequired,
  };

export default DrillingCompOne;
