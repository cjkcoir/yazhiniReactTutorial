
const ArrowComp = () => {
  return (

    <>
    
    <div className="text-center text-primary mt-3 h2">ArrowComp</div>
    </>
  )
}

export default ArrowComp


export function SubTwoNumbers({ a, b }) {
    return (
      <div className="text-center text-warning mt-3 h2">
        {" "}
        `The sum value a= ${a},b=${b}  value=`{a - b}
      </div>
    );
  }