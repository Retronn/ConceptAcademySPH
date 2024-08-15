import React, { useState } from "react";
import styles from '../../styles/testHeader.module.scss';

import ArrowIcon from "./static/arrow-icon";
import HighlightIcon from "./static/highlight-icon";
import NoteIcon from "./static/note-icon";
import MoreIcon from "./static/more-icon";
function TestHeader(){

    // Flipping the arrow on checking questions
    const [scaler,setScaler] = useState(-1);
    const arrowColor = "#1E1E1E";
    function changeScaler(){
        setScaler(scaler*-1);
    }

    const textsWithIcons = [
        {
            icons: [<HighlightIcon/>, <NoteIcon/>],
            text: "Highlights & Notes",
            toHandle: handleHighlight,
        },
        {
            icons: [<MoreIcon/>],
            text: "More",
            toHandle: handleMore,
        }
    ]

    function handleHighlight(){

    }
    function handleMore(){

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
            

            <div className={styles.section}>

                <div className={styles.moreSection}>

                    <div className={styles.textWithIcon}>
                            
                        <div className={styles.centerIcons}>
                            <HighlightIcon/>
                            <NoteIcon/>
                        </div>

                        <h6>Highlights & Notes</h6>
                            
                    </div>


                    <div className={styles.textWithIcon}>

                        <div className={styles.centerIcons}>
                            <MoreIcon/>
                        </div>
                        <h6>More</h6>

                    </div>

                </div>
            </div>
        </div>
    </header>
    )
}

export default TestHeader;