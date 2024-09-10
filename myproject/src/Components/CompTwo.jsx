import PropTypes from "prop-types"
import { useContext } from "react";

import { UserContext } from "./ParentDrillApp";
function CompTwo() {
    const user = useContext(UserContext);
  return (
    <>
      <div className="text-center text-primary mt-3 h2">CompTwo</div>;
      <h3 className="text-center text-primary mt-3 h2">{`User name is =${user}`}</h3>
    </>
  );
}

CompTwo.propTypes = {
  user: PropTypes.any
}

export default CompTwo;
