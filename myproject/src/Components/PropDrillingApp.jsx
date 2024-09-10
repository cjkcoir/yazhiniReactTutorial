import { useState } from "react";
import DrillingCompOne from "./DrillingCompOne";

function PropDrillingApp() {

    const[user]=useState("YazhiniJeyam");
    console.log(user);
  return (
    <>
      <div className="text-center text-primary mt-3 h2">PropDrillingApp</div>
      <DrillingCompOne user={user}></DrillingCompOne>
      
      
    </>
  );
}

export default PropDrillingApp;
