import React from "react";
import styles from "../../styles/answerChoice.module.scss"

function AnswerChoice(props){

    return (
        <div className={styles.answerChoiceArea}>

            <button className={styles.answer}>
                <div className={styles.answerLetter}> {props.value} </div>

                <p className={`testFont + ${styles.answerText}`}>{props.content}</p>
            </button>

            <button className={styles.answerCrossoutButton}>
                <div className={styles.answerLetter}>
                    {props.value}
                </div>
                
            </button>
        </div>
    )

}

export default AnswerChoice;