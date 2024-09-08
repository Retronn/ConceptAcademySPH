import styles from "../../styles/testing/testPassageText.module.scss"
import global from "../../styles/testing/globalTesting.module.scss";


function TestPassageText({passage}:any){
    
    function fetchPassage (typeWithContent:any,index: number) {
        if(typeWithContent.type==="blurb"){
            return(
                <div key={index} className={styles.blurb}>
                    {typeWithContent.content.map((element: any,index: number) => fetchPassage (element,index))}
                </div>
            )
        }
        else if(typeWithContent.type==="header"){
            return(
                <div key={index} className={`${styles.passageHeader} ${global.testFont}`}>{typeWithContent.content}</div>
            )
        }
        else if(typeWithContent.type==="standard"){
            return(
                <span key={index} className={`${global.testFont}`}>{typeWithContent.content}</span>
            )
        }
        else if(typeWithContent.type==="copyrights"){
            return(
                <div key={index} className={`${styles.passageCopyrights} ${global.testFont}`}>©{typeWithContent.content}</div>
            )
        }
        else if(typeWithContent.type==="italics"){
            return(
                <span key={index} className={`${styles.italicText} ${global.testFont}`}>{typeWithContent.content}</span>
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
                        {typeWithContent.content.map((note: any,index: number) => {
                           return (
                                    <li className={global.testFont} key={index}> 
                                        {note.map((typeWithContent: any,index: number) => fetchPassage(typeWithContent, index))} 
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

            {passage.map((typeWithContent: any, index: number)=> fetchPassage(typeWithContent, index))}


            </div>
        </div>
    )
}

export default TestPassageText;

//passage: [[text, sda], [underlined, sda], [text, sda]]