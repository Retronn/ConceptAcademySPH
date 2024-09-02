import React, { useEffect, useRef, useState } from "react";
import styles from '../../styles/testing/testHeader.module.scss';
import global from "../../styles/testing/globalTesting.module.scss";
import ArrowIcon from "./static/arrow-icon";
import HighlightIcon from "./static/highlight-icon";
import NoteIcon from "./static/note-icon";
import MoreIcon from "./static/more-icon";
import TimerIcon from "./static/timer-icon";
import TimerCountdown from "./timer-countdown";
import WarningIcon from "./static/warning-icon";
import ExitIcon from "./static/exit-icon";


function TestHeader(props){

    // Flipping the arrow on checking questions
    const [scaler,setScaler] = useState(-1);
    const arrowColor = "#1E1E1E";
    function changeScaler(){
        setScaler(scaler*-1);
    }

    const [timerDisplays, setTimerDisplays] = useState({
        timer: "flex",
        icon: "none",
    });

    const [timerButtonText, setTimerButtonText] = useState("Hide");
    const [timerButtonUnderline, setTimerButtonUnderline] = useState("none");
    const [timerButtonTextOpacity, setTimerButtonTextOpacity] = useState(1);
    const [timerButtonTransparency, setTimerButtonTransparency] = useState("none");



    function handleHighlight(){
        //Add highlight behaviour
    }


    function handleHideTimer(){
        setTimerDisplays( {
            timer: timerDisplays.icon,
            icon: timerDisplays.timer,
        })
        if(timerButtonText==="Hide"){
            setTimerButtonText("Show");
        }
        else{
            setTimerButtonText("Hide");
        }
        //setTimerButtonTransparency("");
    }
    function handleUnderlineOn(){
        setTimerButtonUnderline("underline");
        setTimerButtonTextOpacity(0.8);
        setTimerButtonTransparency("transparent");
    }
    function handleUnderlineOff(){
        setTimerButtonUnderline("none");
        setTimerButtonTextOpacity(1);
        setTimerButtonTransparency("");
    }

    const [directionsDispay, setDirectionsDispay] = useState("none");
    const [moreOptionsDispay,setMoreOptionsDispay] = useState("none");

    function toggleDirectionRules(){
        changeScaler();
        props.toogleModalOverlay();
        (directionsDispay==="none" ? setDirectionsDispay("flex") : setDirectionsDispay("none"));

    }

    function toogleMoreOptions(){
        (moreOptionsDispay==="none" ? setMoreOptionsDispay("flex") : setMoreOptionsDispay("none"));
    }

    function toogleHighlight(){
        alert("Highlightes & notes are in development.")
    }

    const directionRulesRef = useRef(null);
    const directionsButtonRef = useRef(null);
    const moreOptionsRef =useRef(null);
    const moreOptionsButtonRef =useRef(null);
    useEffect(()=>{

        function handleClickOutide (event){
            if(scaler===1 && 
                !directionRulesRef.current.contains(event.target) &&
                !directionsButtonRef.current.contains(event.target)
              )
            {
                
                toggleDirectionRules();
            }

            if(moreOptionsDispay==="flex" && 
                !moreOptionsRef.current.contains(event.target) &&
                !moreOptionsButtonRef.current.contains(event.target)
              )
                {
                    toogleMoreOptions();
                }
        }
            document.addEventListener("click", handleClickOutide);

            return ()=>{
                document.removeEventListener("click", handleClickOutide);
            }
        
    },[scaler, moreOptionsDispay]);

    const moduleTime = 1920;

    function onTimerZero(){
        console.log("Module ended");
    }

    return (

    <header className={styles.testHeader}>

        <div className={styles.gridContainer}>


            <div className={styles.section}>

                {/* Section title */}
                <h4 className={global.h4}> 
                   {`Section ${props.question.section}: 
                   ${(props.question.testPart==1) ? "Reading and Writing" : "Math"}`} 
                </h4>

                {/* Check directions button */}
                <button ref={directionsButtonRef} className={styles.directions} onClick={toggleDirectionRules}> 
                    <h5 className={global.h5}>Directions</h5>
                    <ArrowIcon scaler={scaler} color={arrowColor}/>
                </button>
                
            </div>

            <div ref={directionRulesRef} className={styles.directionsRules} style={{display: directionsDispay}}>
                <p className={global.testFont}>
                    The questions in this section address a number 
                    of important reading and writing skills. 
                    Each question includes one or more passages, 
                    which may include a table or graph. 
                    Read each passage and question carefully,
                    and then choose the a best answer to the question based on the 
                    passage(s). 
                </p>
                <p className={global.testFont}>
                    All questions in this section are multiple-choice with four answer choices. Each question has a single best answer.
                </p>

                <div className={styles.buttonArea}>
                    <button className={`${styles.closeButton}`} onClick={toggleDirectionRules}>
                        Close
                    </button>
                </div>
            </div>


            <div className={styles.section}>

                {/* Timer Value */}

                
                <div className={styles.timerBox}>
                    <h4 className={global.h4} id={styles.timer} style={{display: timerDisplays.timer}}>
                        <TimerCountdown initialTime={moduleTime} onTimerZero={onTimerZero}/>
                    </h4>

                    <TimerIcon display={timerDisplays.icon}/>
                </div>

                {/* Timer hide button */}
                <button 
                    id={styles.hideTimerButton} 
                    onClick={handleHideTimer} 
                    onMouseDown={handleUnderlineOn}
                    onMouseUp={handleUnderlineOff}
                    onMouseLeave={handleUnderlineOff}
                    style={{textDecoration: timerButtonUnderline, backgroundColor: timerButtonTransparency}}
                    
                > 

                    <h5 className={global.h5} style={{opacity: timerButtonTextOpacity}}>{timerButtonText}</h5>

                </button>

            </div>
            

            <div className={`${styles.section} ${styles.moreSection}`}>

                {/* Buttons "Highlight" and "More" */}

                <button className={styles.textWithIcon} onClick={toogleHighlight}>
                            
                            <div className={styles.centerIcons}>
                
                                <HighlightIcon/>
                                <NoteIcon/>
                            </div>
                
                            <h6 className={global.h6}>Highlights & Notes</h6>
                        
                </button>

                <button ref={moreOptionsButtonRef} 
                        className={styles.textWithIcon} 
                        onClick={toogleMoreOptions}
                >
                            
                            <div className={styles.centerIcons}>
                
                                <MoreIcon/>
                            </div>
                
                            <h6 className={global.h6}>More</h6>
                        
                </button>


            </div>

            <div ref={moreOptionsRef} className={styles.moreContainer} style={{display: moreOptionsDispay}}>
                <button className={`${styles.moreOption} ${styles.topOption}`}>
                    <ExitIcon/>
                    <h5 className={global.h5}> Unscheduled Break </h5>
                </button>

                <button className={`${styles.moreOption} ${styles.bottomOption}`}>
                    <WarningIcon/>
                    <h5 className={global.h5}> Exit the Exam </h5>
                </button>
            </div>
        </div>
    </header>
    )
}

export default TestHeader;