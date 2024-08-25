import React, {useState,useEffect, useRef} from "react";
import TestPassage from "./test-passage";
import TestQuestion from "./test-question";
import styles from '../../styles/testBody.module.scss'
import DashedBorders from "./static/dashed-borders";
import AddNoteIcon from "./static/add-note-icon";
import TrashBinIcon from "./static/trash-bin-icon";
import UnderlineIcon from "./static/underline-icon";
import ArrowIcon from "./static/arrow-icon";

function TestBody(props){

    // Temporary storing the question
    const question = {
        testPart: 1,
        section: 1,
        questionNumber: 1,
        questionType: 1,
        passage: [
                    {
                        type: "blurb", 
                        content:[
                                {
                                    type:"standard",
                                    content: "While researching a topic, a student has taken the following notes:"
                                },
                                ]
                    },

                    {
                        type: "notes", 
                        content:[
                                    [   
                                        {
                                            type: "standard",
                                            content:"Scientists have developed a “freeze-thaw” battery that can retain 92% of its charge after twelve weeks.",
                                        }
                                    ],

                                    [   
                                        {
                                            type: "standard",
                                            content:"Scientists have developed a “freeze-thaw” battery that can retain 92% of its charge after twelve weeks.",
                                        }
                                    ],
                                ]
                    },

                    
                ],

        isMarked: false,
        isAnswered: false,
        questionStatement: "Which choice completes text the text with the most logical and precise word or phrase?",
        answerChoices: {
            values: ["A","B","C","D"],
            contents: ["scholarly", "melodic", "jarring", "personal"],
        },
    }

    const colors = {  
        mainBlack : "#1e1e1e",
        noteLightBlack : "#1f1f1f",
        noteLightYellow: "#fffad7",
        noteYellow: "#ffe898",
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

    const [addNoteColor,setAddNoteColor] = useState(colors.noteLightYellow);
    function handleNoteEnter(){
        setAddNoteColor( (addNoteColor)===colors.noteLightYellow ? colors.noteYellow : colors.noteLightYellow);
    }

    const passageTextRef = useRef(null);
    const questionTextRef = useRef(null);

    const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
    const [toolbarVisible, setToolbarVisible] = useState(false);

    useEffect(() => {
        const handleMouseUp = (event) => {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);

                if(
                    (
                        (passageTextRef.current && passageTextRef.current.contains(event.target)) 
                        || 
                        (questionTextRef.current && questionTextRef.current.contains(event.target))
                    ) 
                    && 
                    range.startOffset-range.endOffset!=0
                ){
                    const rect = range.getBoundingClientRect();

                    setToolbarPosition({
                        top: rect.top + window.scrollY - 140, // Adjust height as needed
                        left: rect.left,
                    });
                    setToolbarVisible(true);
                }

            } else {
                setToolbarVisible(false);
            }
        };

        const handleMouseDown = (event) => {
            const toolbar = document.getElementById(styles.toolbar);
            if (!toolbar || !toolbar.contains(event.target)) {
                setToolbarVisible(false);
            }
        };

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);
    

    return (
        <div className={styles.testBody}>


            <div id={styles.toolbar} style={{
                display: (toolbarVisible) ? "flex" : "none",
                top: toolbarPosition.top,
                left: toolbarPosition.left,
            }}>
                <button className={styles.highlight} id={styles.paintYellow}></button>
                <button className={styles.highlight} id={styles.paintBlue}></button>
                <button className={styles.highlight} id={styles.paintPink}></button>


                <button className={styles.highlight} id={styles.chooseUndeline}>
                        <UnderlineIcon/>
                        <ArrowIcon childClass={styles.arrowIcon}/>
                </button>

                <button className={styles.highlight} id={styles.deleteHighlight}>
                    <TrashBinIcon  color={colors.mainBlack} backColor={"white"}/>
                </button>
                <div className={styles.divider}/>
                <button 
                    className={styles.highlight} 
                    id={styles.addNote} 
                    onMouseEnter={handleNoteEnter}
                    onMouseLeave={handleNoteEnter}
                >
                    <AddNoteIcon color={colors.noteLightBlack} backColor={addNoteColor}/>
                </button>
            </div>



            <div className={props.modalOverlayStyle}/>

            <TestPassage passageRef = {passageTextRef} passage={question.passage}/>
            <TestQuestion question={question} reference={questionTextRef}/>
            
            <DashedBorders childClass={styles.borderBox} bordersStrokeWidths={bordersStrokeWidths}/>
        </div>
    )
}



export default TestBody;