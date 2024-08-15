import React from "react";
import styles from '../../styles/TestFooter.module.scss'

function TestFooter(){
    return (
    <footer className={styles.testFooter}>
        <div className={styles.gridContainer}>
            <div className={styles.section}>
                <h4>Alexandr Tkachyov</h4>
                
            </div>

            <div className={styles.section}>
                <button id={styles.testQuestionsButton}><h5>Question 1 of 27</h5></button>
            </div>


            <div className={styles.section}>
                <button id={styles.nextQuestionButton}><h5>Next</h5></button>
            </div>
        </div>
    </footer>
    )
}

export default TestFooter;