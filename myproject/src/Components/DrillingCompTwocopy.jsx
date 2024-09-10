// import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "./PropDrillingAppcopy"; // Named import so use  {}
function DrillingCompTwocopy() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="text-center text-primary mt-3 h2">
        DrillingCompTwocopy
      </div>
      <h3 className="text-center text-primary mt-3 h2">{`User name is =${user}`}</h3>
    </>
  );
}

export default DrillingCompTwocopy;
