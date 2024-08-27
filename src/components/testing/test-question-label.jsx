import React from "react";
import MapMarkerIcon from "./static/map-marker-icon";
import styles from "../../styles/testQuestionLabel.module.scss"
import BookmarkIcon from "./static/bookmark-icon";

function TestQuestionLabel({question, isCurrent, changeQuestion,closeOverlay}){

    const questionNum = question.questionNumber;
    
    function handleClick(){
        changeQuestion(questionNum);
        closeOverlay();
    }


    return(
        <button onClick={handleClick}>
            <div className={styles.container} style={{
                textDecoration: (isCurrent) ? "underline" : "none",
                color: (question.isAnswered) ? "white" : "#324DC7",
                backgroundColor: (question.isAnswered) ? "#324DC7" : "white",
                backgroundImage: (question.isAnswered) ? "none" : 'url("bigDashedSqare.svg")',
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