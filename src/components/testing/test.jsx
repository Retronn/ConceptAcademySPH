import React, {useState} from "react";
import TestHeader from "./test-header";
import TestFooter from "./test-footer";
import TestBody from "./test-body";
import styles from "../../styles/test.module.scss";

function Test(){

  const [modalOverlayStyle, setModalOverlayStyle] = useState("");
  function toogleModalOverlay(){
      setModalOverlayStyle(modalOverlayStyle==="" ? styles.modalOverlay : "");
      
  }

  return (<>
    <TestHeader toogleModalOverlay={toogleModalOverlay}/>
    <TestBody modalOverlayStyle={modalOverlayStyle}/>
    <TestFooter/>
  </>)
}

export default Test;