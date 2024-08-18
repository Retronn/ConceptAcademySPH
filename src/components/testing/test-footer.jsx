import React, {useState} from "react";
import styles from '../../styles/TestFooter.module.scss';

import ArrowIcon from "./static/arrow-icon";

function TestFooter(){

    // Flipping the arrow on checking questions
    const [scaler,setScaler] = useState(-1);
    function changeScaler(){
        setScaler(scaler*-1);
    }


    return (
    <footer className={styles.testFooter}>

        <div className={styles.gridContainer}>

            {/* Users full name */}
            <div className={styles.section}>
                <h4>Alexandr Tkachyov</h4>
            </div>


            {/* "Questions" button */}
            <div className={styles.section}>
                <button id={styles.testQuestionsButton} onClick={changeScaler}>
                    <h5>Question 1 of 8</h5>
                    <ArrowIcon scaler={scaler} color={`white`}/>
                </button>
            </div>

            {/* Next "quesiton" button */}
            <div className={styles.section}>
                <button id={styles.nextQuestionButton}><h5>Next</h5></button>
            </div>

        </div>

    </footer>
    )
}

export default TestFooter;