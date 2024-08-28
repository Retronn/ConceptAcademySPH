import React from "react";
import MapMarkerIcon from "./static/map-marker-icon";
import styles from "../../styles/testQuestionLabel.module.scss"
import BookmarkIcon from "./static/bookmark-icon";

function TestQuestionLabel({question, isCurrent, changeQuestion,closeOverlay, isReview=false}){

    const questionNum = question.questionNumber;
    
    function handleClick(){
        changeQuestion(questionNum);
        closeOverlay();
    }


    return(
        <button onClick={handleClick} className={styles.labelButton}>
            <div className={styles.container} style={{
                width: (isReview) ? "2.42rem" : "1.75rem",
                height: (isReview) ? "2.42rem" : "1.75rem",
                textDecoration: (isCurrent) ? "underline" : "none",
                color: (question.isAnswered) ? "white" : "#324DC7",
                backgroundColor: (question.isAnswered) ? "#324DC7" : "",
                backgroundImage: (question.isAnswered) ? "none" : ( (isReview) ? 'url("megaDashedSqare.svg")': 'url("bigDashedSqare.svg")'),
                fontSize: (isReview) ? "1.5rem" : "1.1rem",
            }}>
                {questionNum}
                <MapMarkerIcon isInLabel={true} isActive={isCurrent}/>
                <div className={styles.markedLabel} style={{
                    display: (question.isMarked) ? "flex" : "none",
                }}>
                    <BookmarkIcon strokeColor={"#c13145"} fillColor={"#c13145"} />
                </div>
            </div>
        </button>
    )
}


export default TestQuestionLabel;