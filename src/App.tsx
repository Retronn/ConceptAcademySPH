import global from "./styles/testing/globalTesting.module.scss";
import AccountPage from "./components/user-account/AccountPage";
import Test from "./components/testing/Test";

function App(){


  return(
    <div className={global.App}>

      <Test/>
      {/* <AccountPage/> */}
    </div>
  )
}

export default App;