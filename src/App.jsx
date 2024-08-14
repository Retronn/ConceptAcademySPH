import React from "react";
import TestHeader from "./components/testing/test-header";
import TestFooter from "./components/testing/test-footer";
import TestBody from "./components/testing/test-body";

function App(){
  return <div className="App">
    <TestHeader/>
    <TestBody/>
    <TestFooter/>
  </div>
}

export default App;