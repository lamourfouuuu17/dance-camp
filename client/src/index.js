import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MasterclassStore from "./store/MasterclassStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      masterclass: new MasterclassStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
