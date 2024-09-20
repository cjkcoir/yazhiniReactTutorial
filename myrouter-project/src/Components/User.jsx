import { useParams } from "react-router-dom"

function User() {

  const{id}=  useParams()
  return (

    <>
    <div className="text-center text-primary mt-3 h2">
    <div>User</div>
    <p>User ID : {id} </p>
    </div>
    
    </>
  )
}

export default User