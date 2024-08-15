import React, { useState } from "react";
import styles from '../../styles/testHeader.module.scss';

import Arrow from "./static/arrow";

function TestHeader(){
    const [scaler,setScaler] = useState(-1);
    const arrowColor = "#1E1E1E";
    function changeScaler(){
        setScaler(scaler*-1);
    }

    return (
    <header className={styles.testHeader}>
        <div className={styles.gridContainer}>
            <div className={styles.section}>
                <h4>Section 1: Reading and Writing</h4>
                <button className={styles.directions} onClick={changeScaler}> 
                    <h5>Directions</h5>
                    <Arrow scaler={scaler} color={arrowColor}/>
                </button>
                
            </div>

            <div className={styles.section}>
                
                    <h4 id={styles.timer}>00:00</h4>
                    <button id={styles.hideTimerButton}> <h5>Hide</h5></button>

            </div>
            

            <div className={styles.section}>
                <div className={styles.moreSection}>
                    <div className={styles.textWithIcon}>
                        <div>
                            <div className={styles.centerIcons}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1l40 39.4l-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1l39.5 38.9l-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6l40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6l40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2M389.8 796.2H229.6l134.4-133l80.1 78.9zm154.8-62.1L373.2 565.2l68.6-67.6l171.4 168.9zM713.1 658L450.3 399.1L597.6 254l262.8 259z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M92 96a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m4 36h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m32 24H96a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m92-108v108.69a11.9 11.9 0 0 1-3.52 8.48l-51.31 51.32a11.93 11.93 0 0 1-8.48 3.51H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M48 212h108v-52a4 4 0 0 1 4-4h52V48a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4m158.35-48H164v42.35Z"/></svg>
                            </div>
                            <h6>Highlights & Notes</h6>
                        </div>
                    </div>

                        <div className={styles.textWithIcon}>
                            <div>
                                <div className={styles.centerIcons}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 3h3v3h-3zm0 7.5h3v3h-3zm0 7.5h3v3h-3z"/></svg>
                                </div>
                                <h6>More</h6>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </header>
    )
}

export default TestHeader;