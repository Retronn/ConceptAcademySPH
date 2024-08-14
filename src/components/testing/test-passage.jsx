import React, { useState, useRef } from "react";
import styles from '../../../styles/testPassage.module.scss';

function TestPassage() {
  const [passageWidth, setPassageWidth] = useState("calc(50% - 6px)"); 
  const passageRef = useRef(null);

  const handleResizeStart = (e) => {
    e.preventDefault();

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
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  return (
    <>
      <div className={styles.testPassage} ref={passageRef} style={{ width: `${passageWidth}`}}>
        <h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam imperdiet porta libero at sodales. Fusce imperdiet, 
        ex non placerat sollicitudin, lectus massa feugiat odio, sed 
        mattis risus arcu ut leo. Proin non congue nisl. Pellentesque 
        sed pretium elit. Donec dictum tortor ac finibus malesuada. 
        Sed porttitor bibendum lacus, id laoreet ante. Integer consectetur 
        nec eros ac maximus. In vitae nulla euismod, feugiat mauris et, porta 
        magna. Aliquam maximus vitae odio at viverra. Sed dui dui, ultrices 
        ac elementum sed, vestibulum eget eros. Sed ullamcorper vitae libero nec feugiat.</h6>
      </div>
      <div id={styles.resizer} onMouseDown={handleResizeStart} />
    </>
  );
}

export default TestPassage;
