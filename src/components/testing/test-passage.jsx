import React, { useState, useRef } from "react";
import styles from '../../styles/testPassage.module.scss';
import TestPassageText from "./test-passage-text";
import ScaleIcon from "./static/scale-icon";
import ScalingButton from "./scaling-button";

function TestPassage(props) {
  
  const colors={
    lightGrayColor : "#949494",
    darkGrayColor : "#666666",
  }

  const scalersTransformers = {
    passage: "(1,1)",
    question: "(-1,1)",
  }
  
  const [resizePosition, setResizePosition] = useState("middle");

  const [passageWidth, setPassageWidth] = useState("calc(50% - 6px)"); 
  const passageRef = useRef(null);

  const handleResizeStart = (e) => {
    
    
    e.preventDefault();
    document.body.style.cursor = 'col-resize';
    const startX = e.clientX;
    const startWidth = passageRef.current.getBoundingClientRect().width;
    const containerWidth = passageRef.current.parentElement.getBoundingClientRect().width;

    const handleResize = (event) => {
      const widthDif = event.clientX - startX;
      const newWidth = ((startWidth + widthDif) / containerWidth) * 100; 


        setPassageWidth(`${newWidth}%`);
        passageRef.current.style.width = `${newWidth}%`;
    
    };

    const handleResizeEnd = () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.body.style.cursor = 'default';

      const widthPercent = parseInt(passageRef.current.style.width);
      if(widthPercent>51){
        setResizePosition("right");
      }
      else if(widthPercent<49){
        setResizePosition("left")
      }
      else{
        setResizePosition("middle")
      }
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };



  
  return (
    <>
      <div className={styles.testPassage} ref={passageRef} style={{ width: `${passageWidth}`}}>
        <TestPassageText passage={props.passage}/>
      </div>


      <div id={styles.resizer} onMouseDown={handleResizeStart}>

        <ScalingButton 
            color={colors.lightGrayColor} 
            scaleObject={passageRef} 
            scalerId={"testPassageScaler"}
            transformer={scalersTransformers.passage}
            resizePosition = {resizePosition}
            setResizePosition = {setResizePosition}
        />

        <ScalingButton 
                      color={colors.lightGrayColor} 
                      scaleObject={passageRef} 
                      scalerId={"testQuestionScaler"}
                      transformer={scalersTransformers.question}
                      resizePosition = {resizePosition}
                      setResizePosition = {setResizePosition}
        />

      </div>
    </>
  );
}

export default TestPassage;
