import { React, useContext, useState } from "react";
import { AppContext } from "../App.jsx";
function Changename() {
  let { setNewUserName } = useContext(AppContext);
  const [userName, setUserName] = useState("Deepansh");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={()=>setNewUserName(userName)}>Change</button>
    </div>
  );
}

export default Changename;
