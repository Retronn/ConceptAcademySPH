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

    <div id={styles.container} className={modalOverlayStyle}>
      <TestBody/>
      <TestFooter toogleModalOverlay={toogleModalOverlay}/>
    </div>
  </>)
}

export default Test;