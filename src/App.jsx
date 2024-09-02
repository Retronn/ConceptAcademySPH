import React from "react";
import global from "./styles/testing/globalTesting.module.scss";
import AccountPage from "./components/user-account/account-page";
import Test from "./components/testing/test";

function App(){


  return(
    <div className={global.App}>
      <Test/>
      {/* <AccountPage/> */}
    </div>
  )
}

export default App;