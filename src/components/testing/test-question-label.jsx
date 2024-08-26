import React from "react";
import MapMarkerIcon from "./static/map-marker-icon";
import styles from "../../styles/testQuestionLabel.module.scss"

function TestQuestionLabel({questionNum, isCurrent, changeQuestion,closeOverlay}){


    function handleClick(){
        changeQuestion(questionNum);
        closeOverlay();
    }


    return(
        <button onClick={handleClick}>
            <div className={styles.container} style={{
                textDecoration: (isCurrent) ? "underline" : "none",
            }}>
                <MapMarkerIcon isInLabel={true} isActive={isCurrent}/>
                {questionNum}
            </div>
        </button>
    )
}


export default TestQuestionLabel;