import PropTypes from "prop-types"
import CompTwo from "./CompTwo"

function CompOne({user}) {
  return (
    <>
    <div  className="text-center text-primary mt-3 h2">CompOne</div>


    <CompTwo user={user}></CompTwo>
    
    </>
  )
}

CompOne.propTypes = {
  user: PropTypes.any
}

export default CompOne