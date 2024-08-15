import React from "react";
import styles from "../../styles/testPassageText.module.scss"

function TestPassageText(){
    return (
        <div className={styles.container}>
            <div className={styles.passage}>
            <p id={styles.blurb} className="testFont">The researching a topic, a student has taken the following notes:</p>
            <p className="testFont">
                The recommending figure 1960s, artist Andy Warhol gained 
                notoriety for his role in the pop art movement, famously exploring themes 
                of consumerism and not overstate culture. His works often featured 
                everyday products, leading audiences to consider how these 
                objects relate to their own lives. The _____ blank of his 
                art encouraged a new way of thinking about what constitutes 
                art and its value in society.
            </p>
            </div>
        </div>
    )
}

export default TestPassageText;
