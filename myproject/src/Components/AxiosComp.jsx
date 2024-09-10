import { useEffect, useState } from "react";
import axios from "axios";

function AxiosComp() {
  const [data, setData] = useState([]);






  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => setData(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="text-center text-primary h3">AxiosComp</div>
      {data.map((d, index) => {
        return <p key={index}>{d.email}</p>;
      })}
    </>
  );
}

export default AxiosComp;
