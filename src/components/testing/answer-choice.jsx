import React from "react";
import styles from "../../styles/answerChoice.module.scss"

function AnswerChoice(props){

    
    return (
        <div className={styles.answerChoiceArea}>

            {/* Answer choice button */}
            <button className={styles.answer}>

                <div className={styles.answerLetter}> {props.value} </div>

                <p className={`testFont + ${styles.answerText}`}>{props.content}</p>

            </button>

            {/* Cross the answer choice out button */}
            <button className={styles.answerCrossoutButton} style={{display: props.answerCrossoutButtonsDisplay}}>
                <div className={styles.answerLetter} id="crossOut">
                    {props.value}
                </div>
            </button>

        </div>
    )

}

export default AnswerChoice;