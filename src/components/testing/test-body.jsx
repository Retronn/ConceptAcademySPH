import React from "react";
import TestPassage from "./test-passage";
import TestQuestion from "./test-question";
import styles from '../../../styles/testBody.module.scss'

function TestBody(){


    return (
        <div className={styles.testBody}>
            <TestPassage/>
            <TestQuestion/>
        </div>
    )
}



export default TestBody;