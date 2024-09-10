import { createContext, useState } from "react";
export const UserContext = createContext();
import DrillingCompOnecopy from "./DrillingCompOnecopy";

function PropDrillingAppcopy() {
  const [user] = useState("YazhiniJeyam");
  console.log(user);
  return (
    <>
      <UserContext.Provider value={user}>
        <div className="text-center text-primary mt-3 h2">
          PropDrillingAppcopy
        </div>
        <DrillingCompOnecopy></DrillingCompOnecopy>
      </UserContext.Provider>
    </>
  );
}

export default PropDrillingAppcopy;
