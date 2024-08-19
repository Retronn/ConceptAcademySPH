import React, { useState } from "react";
import styles from '../../styles/testHeader.module.scss';

import ArrowIcon from "./static/arrow-icon";
import HighlightIcon from "./static/highlight-icon";
import NoteIcon from "./static/note-icon";
import MoreIcon from "./static/more-icon";
import TextWithIcons from "./static/text-with-icons";
import TimerIcon from "./static/timer-icon";


function TestHeader(){

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


    const textsWithIcons = [
        {
            icons: [<HighlightIcon key={1}/>, <NoteIcon key={2}/>],
            text: "Highlights & Notes",
            toHandle: handleHighlight,
        },
        {
            icons: [<MoreIcon key={1}/>],
            text: "More",
            toHandle: handleMore,
        }
    ]

    function handleHighlight(){
        //Add highlight behaviour
    }
    function handleMore(){
        //Add more behaviour
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

    return (

    <header className={styles.testHeader}>

        <div className={styles.gridContainer}>


            <div className={styles.section}>

                {/* Section title */}
                <h4>Section 1: Reading and Writing</h4>

                {/* Check directions button */}
                <button className={styles.directions} onClick={changeScaler}> 
                    <h5>Directions</h5>
                    <ArrowIcon scaler={scaler} color={arrowColor}/>
                </button>
                
            </div>

            <div className={styles.section}>

                {/* Timer Value */}

                <div className={styles.timerBox}>
                    <h4 id={styles.timer} style={{display: timerDisplays.timer}}>00:00</h4>

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

                    <h5 style={{opacity: timerButtonTextOpacity}}>{timerButtonText}</h5>

                </button>

            </div>
            

            <div className={`${styles.section} ${styles.moreSection}`}>

                {/* Buttons "Highlight" and "More" */}
                {textsWithIcons.map((textsWithIcon,index)=>{
                    return (<TextWithIcons 
                                key={index} 
                                icons={textsWithIcon.icons} 
                                text={textsWithIcon.text} 
                                textWithIconStyle={styles.textWithIcon} 
                                centerIconsStyle={styles.centerIcons} 
                                toHandle={textsWithIcon.toHandle}
                            />)
                })}

            </div>
        </div>
    </header>
    )
}

export default TestHeader;