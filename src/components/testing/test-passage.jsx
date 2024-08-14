import React, {useState, useRef} from "react";
import styles from '../../../styles/testPassage.module.scss'


function TestPassage(){

    const [passageWidth, setPassageWidth] = useState(505); // Initial width
    const passageRef = useRef(null);
  
    const handleResizeStart = (e) => {
      e.preventDefault();
  
      const startX = e.clientX;
      const startWidth = passageRef.current.offsetWidth;
  
      const handleResize = (event) => {
        const widthDif = event.clientX - startX;
        const newWidth = startWidth + widthDif;
  
        if (newWidth > 350) {
          passageRef.current.style.width = `${newWidth/16}rem`;
          setPassageWidth(newWidth);
        }
      };
  
      const handleResizeEnd = () => {
        // Update the state with the final width
        //setPassageWidth(passageRef.current.offsetWidth);
        document.removeEventListener('mousemove', handleResize);
        document.removeEventListener('mouseup', handleResizeEnd);
      };
  
      // Add event listeners
      document.addEventListener('mousemove', handleResize);
      document.addEventListener('mouseup', handleResizeEnd);
    };

        
    return (
        <>
        <div className={styles.testPassage} ref={passageRef} >
            <div style={{width: `${passageWidth/16}rem`, maxWidth: "100%", minWidth: "100%"}}>
                <h6>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Aliquam imperdiet porta libero 
                    at sodales. Fusce imperdiet, ex non placerat sollicitudin,
                    lectus massa feugiat odio, sed mattis risus arcu ut leo. 
                    Proin non congue nisl. Pellentesque sed pretium elit. 
                    Donec dictum tortor ac finibus malesuada. Sed porttitor 
                    bibendum lacus, id laoreet ante. Integer consectetur nec 
                    eros ac maximus. In vitae nulla euismod, feugiat mauris 
                    et, porta magna. Aliquam maximus vitae odio at viverra. 
                    Sed dui dui, ultrices ac elementum sed, vestibulum eget eros. Sed ullamcorper vitae libero nec feugiat.
                </h6>
            </div>
        </div>
        <div id={styles.resizer} onMouseDown={handleResizeStart}/>

        </>  
    )
}

export default TestPassage;