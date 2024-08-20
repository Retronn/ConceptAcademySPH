import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/answerChoice.module.scss"

function AnswerChoice(props){
    const answerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (props.isSelected && answerRef.current && !answerRef.current.contains(event.target)) {

            setOutlineOn();
            
          }
        };
        
        if (props.isSelected){
            document.addEventListener('mousedown', handleClickOutside);
        }
        
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [props.isSelected]);

    
    const [crossStyle, setCrossStyle] = useState("");


    function toggleCrossAnswerChoice(){
        props.setCrossedChoices((prev) => {
            return (prev.map((element, index) => {
                if(index===props.index){
                    return !element;
                }
                return element;
            }))
        });


        if(props.isSelected){
            props.setSelectedChoice(null);
        }
    }

    const [thisSelected, setThisSelected] = useState(false);
    


    function handleClick(){
        props.onClick();
        setOutlineOff();
    }
    function setOutlineOff(){
        if(props.isSelected){
            answerRef.current.style.border = "calc(1px/16) solid #324DC7";
            answerRef.current.style.outline = "0.125rem solid #E59700";
        }

    }
    function setOutlineOn(){
        
        if(props.isSelected){
            answerRef.current.style.outline = "0.125rem solid #324DC7";
        }
    }
    

   

    return (
        <div className={styles.answerChoiceArea}>
            
            
            {/* Answer choice button */}
            <button 
                ref={answerRef} 
                onMouseDown={setOutlineOn} 
                onMouseUp={handleClick} 
                
                className={`${styles.answer} ${(props.isCrossed && props.answerCrossoutButtonsDisplay!="none") ? styles.crossAnswerChoice : ""}`}
                style={{
                    outline: props.isSelected ? '0.125rem solid #E59700' : '',
                    border: props.isSelected ? "calc(1px/16) solid #324DC7" : "calc(1px/16) solid #1E1E1E",
                }}
            >
                    

                <div 
                    className={`${styles.answerLetter} ${(props.isCrossed && props.answerCrossoutButtonsDisplay!="none") ? styles.inactiveText : ""}`}
                    style={{
                        backgroundColor: props.isSelected ? '#324DC7' : 'white',
                        color: props.isSelected ? 'white' : '#505050',
                    }}
                
                > {props.value} </div>

                <p className={`testFont ${styles.answerText}  ${(props.isCrossed && props.answerCrossoutButtonsDisplay!="none") ? styles.inactiveText : ""}`}>{props.content}</p>

            </button>

            {/* Cross the answer choice out button */}
            <button onClick={toggleCrossAnswerChoice} className={styles.answerCrossoutButton} style={{display: props.answerCrossoutButtonsDisplay}}>
                <div className={styles.answerLetter} id="crossOut" style={{display: (props.isCrossed) ? "none" : ""}}>
                    {props.value}
                </div>
                <h6 style={{display: (props.isCrossed) ? "" : "none"}}>Undo</h6>
            </button>

        </div>
    )

}

export default AnswerChoice;