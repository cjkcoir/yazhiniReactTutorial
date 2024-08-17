function FunctionClick() {
  // function clickHandler() {
  //   console.log("Button Clicked");
  // }

  return (
    <>
      <div className="btn btn-lg btn-danger mt-5 ms-5" onClick={()=>{console.log("arrow fn clicked");}}>
        ClickMe
      </div>
    </>
  );
}

export default FunctionClick;
