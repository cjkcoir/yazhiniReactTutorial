import { useState,createContext } from "react";
export const UserContext = createContext();
import CompOne from "./CompOne";



function ParentDrillApp() {
    const [user] = useState("Kabilan");
  return (
    <>

    <UserContext.Provider value={user}>
      <div className="text-center text-primary mt-3 h2">ParentDrillApp</div>

      <CompOne ></CompOne>
      </UserContext.Provider>
    </>
  );
}

export default ParentDrillApp;
