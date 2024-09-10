function NestingRows() {
  return (
    <>
      <div className="text-center text-primary mt-3 container-fluid border-primary border  border-2">
        <div className="text-center text-primary row border-2 border-danger border">
          <div className="col border border-2 border-warn">
            <div className="text-center text-white fw-bold row border-2 border-danger border">
              <div className="col border border-2 border-warn bg-black">
                {" "}
                col1{" "}
              </div>
              <div className="col border border-2 border-warn bg-danger">
                Col2
              </div>
            </div>
          </div>
          <div className="col border border-2 border-warn">
            <div className="text-center text-white fw-bold row border-2 border-danger border">
              <div className="col border border-2 border-warn bg-black">
                <div className="text-center text-white fw-bold row border-2 border-danger border">
                  <div className="col border border-2 border-warn bg-black">
                    {" "}
                    col1{" "}
                  </div>
                  <div className="col border border-2 border-warn bg-danger">
                    Col2
                  </div>
                </div>
              </div>
              <div className="col border border-2 border-warn bg-danger">
                Col2
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-primary row border border-success border-2">
          <div className="col border border-2 border-warn">Col1</div>
          <div className="col border border-2 border-warn">Col2</div>
        </div>
      </div>
    </>
  );
}

export default NestingRows;
