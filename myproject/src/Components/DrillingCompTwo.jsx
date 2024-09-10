
import PropTypes from "prop-types"
function DrillingCompTwo({user}) {
    console.log(user);
  return (

    <>
    <div  className="text-center text-primary mt-3 h2" >DrillingCompTwo</div>
    <h3 className="text-center text-primary mt-3 h2">{`User name is =${user}`}</h3>
    
    </>
  )
}



export default DrillingCompTwo