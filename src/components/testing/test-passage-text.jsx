import React from "react";
import styles from "../../styles/testPassageText.module.scss"

function TestPassageText({passage}){
    
    function fetchPassage (typeWithContent,index) {
        if(typeWithContent.type==="blurb"){
            return(
                <div key={index} className={styles.blurb}>
                    {typeWithContent.content.map((element,index) => fetchPassage (element,index))}
                </div>
            )
        }
        else if(typeWithContent.type==="header"){
            return(
                <div key={index} className={`${styles.passageHeader} testFont`}>{typeWithContent.content}</div>
            )
        }
        else if(typeWithContent.type==="standard"){
            return(
                <span key={index} className={`testFont`}>{typeWithContent.content}</span>
            )
        }
        else if(typeWithContent.type==="copyrights"){
            return(
                <div key={index} className={`${styles.passageCopyrights} testFont`}>©{typeWithContent.content}</div>
            )
        }
        else if(typeWithContent.type==="italics"){
            return(
                <span key={index} className={`${styles.italicText} testFont`}>{typeWithContent.content}</span>
            )
        }
        else if(typeWithContent.type==="graph"){
            return(
                <div key={index} className={styles.graphContainer}>
                    <img draggable={false} src = {typeWithContent.content} alt="graph"/>
                </div>
            )
        }
        else if(typeWithContent.type==="notes"){
            return(
                <div key={index} className={styles.notesContainer}>
                    <ul>
                        {typeWithContent.content.map((note,index) => {
                           return (
                                    <li className="testFont" key={index}> 
                                        {note.map((typeWithContent,index) => fetchPassage(typeWithContent, index))} 
                                    </li>
                                )
                        })}
                    </ul>
                </div>
            )
        }
    }


    return (
        <div className={`${styles.container}`}>

            <div className={styles.passageContainer}>

            {passage.map((typeWithContent, index)=> fetchPassage(typeWithContent, index))}


            </div>
        </div>
    )
}

export default TestPassageText;

//passage: [[text, sda], [underlined, sda], [text, sda]]