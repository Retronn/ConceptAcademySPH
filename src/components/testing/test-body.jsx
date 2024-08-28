import React, {useState,useEffect, useRef} from "react";
import TestPassage from "./test-passage";
import TestQuestion from "./test-question";
import styles from '../../styles/testBody.module.scss'
import DashedBorders from "./static/dashed-borders";
import AddNoteIcon from "./static/add-note-icon";
import TrashBinIcon from "./static/trash-bin-icon";
import UnderlineIcon from "./static/underline-icon";
import ArrowIcon from "./static/arrow-icon";
import ReviewPage from "./review-page";

function TestBody({question,setTestQuestions,testQuestions,changeQuestion, isReviewActive, setIsReviewActive}){

    // Temporary storing the question
    

    const colors = {  
        mainBlack : "#1e1e1e",
        noteLightBlack : "#1f1f1f",
        noteLightYellow: "#fffad7",
        noteYellow: "#ffe898",
        activeRedColor: "#ab2334",
        lightRedColor: "#c13145",
        whiteColor: "#FFFFFF",
        blueColor: "#324DC7",
        lightGrayColor : "#949494",
        darkGrayColor : "#666666",
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
                        (passageTextRef.current && passageTextRef.current.contains(event.target)) && (false) //Turned off for now
                        || 
                        (questionTextRef.current && questionTextRef.current.contains(event.target)) && (false) //Turned off for now
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
    

    

    function toggleReviewPage(){
        setIsReviewActive(!isReviewActive);
    }

    return (

        <>
        <div className={styles.testBody} style={{display: (isReviewActive) ? "none" : "flex"}}>
            

            
            <div id={styles.toolbar} style={{
                display: (toolbarVisible) ? "flex" : "none",
                top: toolbarPosition.top,
                left: toolbarPosition.left,
            }}>
                <button className={`${styles.highlight} ${styles.paintYellow}`}/>
                <button className={`${styles.highlight} ${styles.paintBlue}`} />
                <button className={`${styles.highlight} ${styles.paintPink}`} />


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



            

            <TestPassage passageRef = {passageTextRef} passage={question.passage}/>
            <TestQuestion question={question} reference={questionTextRef} setTestQuestions={setTestQuestions}/>
            

            <DashedBorders childClass={styles.borderBox} bordersStrokeWidths={bordersStrokeWidths}/>
        </div>



        <ReviewPage question={question} colors={colors} 
                    testQuestions={testQuestions} toggleReviewPage={toggleReviewPage} 
                    changeQuestion={changeQuestion} bordersStrokeWidths={bordersStrokeWidths}
                    isReviewActive={isReviewActive}
        />

        
    </>
    )
}



export default TestBody;