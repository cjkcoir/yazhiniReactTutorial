function ChidreGrid() {
  return (
    <>
      <div>
        <style>
          {`
          h3 {
            background-color: black;
            color: white;
            text-align: center;
          }
          h3::before {
            content: "xs";
          }
          @media only screen and (min-width: 576px) {
            h3::before {
              content: "sm";
            }
          }
          @media only screen and (min-width: 768px) {
            h3::before {
              content: "md";
            }
          }
          @media only screen and (min-width: 992px) {
            h3::before {
              content: "lg";
            }
          }
          @media only screen and (min-width: 1200px) {
            h3::before {
              content: "xl";
            }
          }
          @media only screen and (min-width: 1400px) {
            h3::before {
              content: "xxl";
            }
          }
        `}
        </style>
        <h3></h3>
      </div>

      <div className="container border border-2 border-primary mt-5">
        <div className="border border-danger border-2 mb-3 mt-3 row bg-info text-center ">
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div1
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div2
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div3
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div4
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div5
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div6
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div7
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div8
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div9
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div10
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div11
          </div>
          <div className="col-1 border border-dark border-2 bg-danger text-center">
            Div12
          </div>
        </div>
        <div className="border border-danger border-2 mb-3 mt-3 row bg-info text-center ">
          <div className="col-4 col-lg-6 col-xl-1 border border-dark border-2 bg-danger text-center">
            Div1
          </div>
          <div className="col-8 col-lg-6 col-xl-11 border border-dark border-2 bg-danger text-center">
            Div2
          </div>
        </div>
      </div>
    </>
  );
}

export default ChidreGrid;
