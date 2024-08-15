import React from "react";
import styles from "../../styles/testPassageText.module.scss"

function TestPassageText(props){
    const {passageText} = props.passage;
    return (
        <div className={styles.container}>
            <div className={styles.passage}>
            {/* <p id={styles.blurb} className="testFont">The researching a topic, a student has taken the following notes:</p> */}
            <p className="testFont">
                {passageText}
            </p>
            </div>
        </div>
    )
}

export default TestPassageText;
