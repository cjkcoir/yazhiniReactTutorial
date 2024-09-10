import Comp from "./Comp";

function PassProps() {
  const data = { name: "chella", age: 52, place: "Madurai" };
  return (
    <>
      <div className="text-center text-primary mt-3 h2">PassProps</div>

      <Comp name={data.name} age={data.age} place={data.place}></Comp>

    </>
  );
}

export default PassProps;
