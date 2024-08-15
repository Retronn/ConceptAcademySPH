import React, { useState } from "react";
import styles from '../../styles/testHeader.module.scss';

import ArrowIcon from "./static/arrow-icon";
import HighlightIcon from "./static/highlight-icon";
import NoteIcon from "./static/note-icon";
import MoreIcon from "./static/more-icon";
import TextWithIcons from "./static/text-with-icons";

function TestHeader(){

    // Flipping the arrow on checking questions
    const [scaler,setScaler] = useState(-1);
    const arrowColor = "#1E1E1E";
    function changeScaler(){
        setScaler(scaler*-1);
    }

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
                <h4 id={styles.timer}>00:00</h4>

                {/* Timer hide button */}
                <button id={styles.hideTimerButton}> <h5>Hide</h5></button>

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