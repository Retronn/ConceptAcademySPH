import React, { useState, useRef } from "react";
import styles from '../../styles/testPassage.module.scss';
import TestPassageText from "./test-passage-text";
function TestPassage() {
  
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

    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  return (
    <>
      <div className={styles.testPassage} ref={passageRef} style={{ width: `${passageWidth}`}}>
        <TestPassageText/>
      </div>
      <div id={styles.resizer} onMouseDown={handleResizeStart} />
    </>
  );
}

export default TestPassage;
