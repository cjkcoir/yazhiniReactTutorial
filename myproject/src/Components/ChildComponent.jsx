
function ChildComponent(props) {
  return (

    <>
    
    <div>ChildComponent</div>

    <div className="text-center">


    <button className="btn btn-lg btn-danger" onClick={()=>props.greetHandler("Children")}>Greet Parent from child</button>
    </div>

    </>
  )
}

export default ChildComponent