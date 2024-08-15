import React, {useState,useEffect, useRef} from "react";
import TestPassage from "./test-passage";
import TestQuestion from "./test-question";
import styles from '../../styles/testBody.module.scss'

function TestBody(){

    const question = {
        question: "Which choice completes text the text with the most logical and precise word or phrase?",
        answerChoices: {
            values: ["A","B","C","D"],
            contents: ["scholarly", "melodic", "jarring", "personal"],
        }
    }

    const [strokeSize, setStrokeSize] = useState(window.innerWidth/56-2);

    const pathElement= useRef(null);
    useEffect(() => {
        const handleResize = () => {
        const calculatedSize = window.innerWidth/56-2;
        setStrokeSize(calculatedSize);
        };


        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.testBody}>
            <svg className={styles.borderBox} viewBox='0 0 300 100' preserveAspectRatio='none'>
                <path ref={pathElement} d='M0,0 L300,0 M0,100 L300,100' vectorEffect='non-scaling-stroke' style={{strokeDasharray: `${strokeSize}, 2`}}/>
            </svg>
            <TestPassage />
            <TestQuestion question={question}/>
        </div>
    )
}



export default TestBody;