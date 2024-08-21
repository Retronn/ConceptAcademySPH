import React, {useState,useEffect, useRef} from "react";
import TestPassage from "./test-passage";
import TestQuestion from "./test-question";
import styles from '../../styles/testBody.module.scss'
import DashedBorders from "./static/dashed-borders";

function TestBody(props){

    // Temporary storing the question
    const question = {
        questionStatement: "Which choice completes text the text with the most logical and precise word or phrase?",
        questionNumber: 1,
        answerChoices: {
            values: ["A","B","C","D"],
            contents: ["scholarly", "melodic", "jarring", "personal"],
        },
        passage: {
            passageText: <>In recommending Bao Phi's collection <i>Sông I Sing</i>, a librarian noted that pieces by the spoken-word poet don't lose their ______ nature when printed: the language has the same pleasant musical quality on the page as it does when performed by Phi.</>,
        },
    }

    // Hook for top and bottom dash borders' widths
    const [bordersStrokeWidths, setBordersStrokeWidths] = useState(window.innerWidth/56-1.5);


    // Calculating top and bottom dash borders' widths
    useEffect(() => {
        const handleResize = () => {
        const calculatedSize = window.innerWidth/56-1.5;
        setBordersStrokeWidths(calculatedSize);
        };


        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className={styles.testBody}>
            <div className={props.modalOverlayStyle}/>

            <TestPassage passage={question.passage}/>
            <TestQuestion question={question}/>
            
            <DashedBorders childClass={styles.borderBox} bordersStrokeWidths={bordersStrokeWidths}/>
        </div>
    )
}



export default TestBody;