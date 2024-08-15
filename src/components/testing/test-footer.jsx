import React, {useState} from "react";
import styles from '../../styles/TestFooter.module.scss'

import Arrow from "./static/arrow";

function TestFooter(){
    const [scaler,setScaler] = useState(-1);
    function changeScaler(){
        setScaler(scaler*-1);
    }

    return (
    <footer className={styles.testFooter}>
        <div className={styles.gridContainer}>
            <div className={styles.section}>
                <h4>Alexandr Tkachyov</h4>
                
            </div>

            <div className={styles.section}>
                <button id={styles.testQuestionsButton} onClick={changeScaler}>
                    <h5>Question 1 of 27</h5>
                    <Arrow scaler={scaler} color={`white`}/>
                </button>
            </div>


            <div className={styles.section}>
                <button id={styles.nextQuestionButton}><h5>Next</h5></button>
            </div>
        </div>
    </footer>
    )
}

export default TestFooter;