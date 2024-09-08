import { useState} from "react";
import styles from '../../styles/testing/testPassage.module.scss';
import global from "../../styles/testing/globalTesting.module.scss";
import TestPassageText from "./TestPassageText";
import ScalingButton from "./ScalingButton";

function TestPassage({passageRef,passage} : any) {
  
  const colors={
    lightGrayColor : "#949494",
    darkGrayColor : "#666666",
  }

  const [scalersTransformers,setScalersTransformers] = useState({
    passage: "(1,1)",
    question: "(-1,1)",
  })
  
  const [resizePosition, setResizePosition] = useState("middle");

  const [passageWidth, setPassageWidth] = useState("calc(50% - 3px)"); 
  

  const handleResizeStart = (e: any) => {
    if(e.target.id!=styles.resizer){
      return 0;
    }
    
    e.preventDefault();
    document.body.style.cursor = 'col-resize';
    const startX = e.clientX;
    const startWidth = passageRef.current.getBoundingClientRect().width;
    const containerWidth = passageRef.current.parentElement.getBoundingClientRect().width;

    const handleResize = (event: any) => {
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

      setScalersTransformers({
        passage: "(1,1)",
        question: "(-1,1)",
      })

      if(widthPercent>50){
        setResizePosition("part-right");
      }
      else if(widthPercent<50){
        setResizePosition("part-left");
      }
      if(widthPercent==50){
        setResizePosition("middle");
      }
      
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };



  
  return (
    <>
      <div className={styles.testPassage} ref={passageRef} style={{ width: `${passageWidth}`}}>
        <TestPassageText passage={passage}/>
      </div>


      <div id={styles.resizer} onMouseDown={handleResizeStart}>

        <ScalingButton 
            color={colors.lightGrayColor} 
            scaleObject={passageRef} 
            scalerId={global.testPassageScaler}
            transformer={scalersTransformers.passage}
            resizePosition = {resizePosition}
            setTransformer = {setScalersTransformers}
            setResizePosition = {setResizePosition}
        />

        <ScalingButton 
                      color={colors.lightGrayColor} 
                      scaleObject={passageRef} 
                      scalerId={global.testQuestionScaler}
                      transformer={scalersTransformers.question}
                      setTransformer = {setScalersTransformers}
                      resizePosition = {resizePosition}
                      setResizePosition = {setResizePosition}
        />

      </div>
    </>
  );
}

export default TestPassage;
