function Float() {
  return (
    <>
      <div className="text-center text-primary mt-3 h2"> Float</div>

      <div className="bg-danger clearfix mb-5">
        <div
          className="float-start bg-primary "
          style={{ width: "200px", height: "100px" }}
        >
          One
        </div>
        <div
          className="float-start bg-warning"
          style={{ width: "200px", height: "100px" }}
        >
          Two
        </div>
      </div>

      <div className="bg-danger clearfix mb-5">
        <div
          className="float-start bg-primary "
          style={{ width: "200px", height: "100px" }}
        >
          One
        </div>
        <div
          className="float-start bg-warning"
          style={{ width: "200px", height: "100px" }}
        >
          Two
        </div>

        <div
          className="float-end bg-info"
          style={{ width: "200px", height: "100px" }}
        >
          Three
        </div>

        </div>

        <div className="bg-danger clearfix mb-5">
          <div
            className="float-sm-start float-md-end bg-primary "
            style={{ width: "200px", height: "100px" }}
          >
            One
          </div>
          <div
            className="float-sm-start float-md-end bg-warning"
            style={{ width: "200px", height: "100px" }}
          >
            Two
          </div>
        </div>
      
    </>
  );
}

export default Float;
