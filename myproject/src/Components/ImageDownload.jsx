import karthi from "./../images/chella.jpeg";

import IMGS from "./../images.json";

function ImageDownload() {
  return (
    <>
      <div className="text-center text-primary mt-3 h2">ImageDownload</div>
      <img
        src="images/chella.jpeg"
        alt=""
        style={{ width: "200px", height: "200px" }}
        className="ms-5"
      />
      <img src={karthi} alt="" style={{ width: "200px", height: "200px" }} />

      {IMGS.map((item) => {
        return (
          <div key={item.id}>
            <img
              src={item.image}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        );
      })}
    </>
  );
}

export default ImageDownload;
