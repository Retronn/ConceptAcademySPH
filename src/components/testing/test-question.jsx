import React, {useState,useRef,useEffect} from "react";
import styles from '../../styles/testQuestion.module.scss';

// Active Components
import AnswerChoice from "./answer-choice";

// Static components
import LettersCrossedIcon from "./static/letters-crossed-icon";
import BottomDashedBorder from "./static/bottom-dashed-border";
import BookmarkIcon from "./static/bookmark-icon";



function TestQuestion({setTestQuestions,...props}){

    // Just colors in usage
    const colors = {
        mainDarkColor: "#1E1E1E",
        activeRedColor: "#ab2334",
        whiteColor: "#FFFFFF",
        blueColor: "#324DC7",
        lightGrayColor : "#949494",
        darkGrayColor : "#666666",
    }

    
    // Transferred Question Deconstruction
    const {values} = props.question.answerChoices;
    const {contents} = props.question.answerChoices;
    const {questionStatement} = props.question;

    

    // Hook for toogle strikethrough options
    const [strikethroughOptions, setStrikethroughOptions] = useState({
        displayOptions: "none",
        textColor: colors.mainDarkColor,
        backgroundColor: "white",
        areActive: false,
    })


    // Hook for the "Mark for Review" button
    const [markForReviewButton, setMarkForReviewButton] = useState({
        isActive: false,
        backgroundColor: colors.whiteColor,
        strokeWidth: 0.5,
        fontWeigth:400,
    })

  
    // Hook for the bottom dash border's of question info area width 
    const [borderStrokeWidth, setBorderStrokeWidth] = useState(0);

    // Refs for this component
    const infoRef = useRef(null);

    // Activating/Deactivating strikethrough options
    function toogleStrikethroughOptions(){
        if(strikethroughOptions.areActive){
            // Turn them off
            setStrikethroughOptions({
                displayOptions: "none",
                textColor: colors.mainDarkColor,
                backgroundColor: "white",
                areActive: false,
            })
            
        }
        else{
            // Turn them on            
            setStrikethroughOptions({
                displayOptions: "flex",
                textColor: colors.whiteColor,
                backgroundColor: colors.blueColor,
                areActive: true,
            })
        }

    }



    // Marking/Unmarking the question
    function markQuestionForReview(){
        if(markForReviewButton.isActive){
            // Unmark it
            setMarkForReviewButton({
                isActive: false,
                backgroundColor: colors.whiteColor,
                strokeWidth: 0.5,
                fontWeigth:400,
            })

        }
        else{
            // Mark it
            setMarkForReviewButton({
                isActive: true,
                backgroundColor: colors.activeRedColor,
                strokeWidth: 1,
                fontWeigth:700,
            })

        }

    }


    //Calculating the width for the bottom border of question info area
    useEffect(() => {
        const infoArea = infoRef.current;

        const handleResize = (entries) => {
            for (let entry of entries) {
                if (entry.contentRect) {
                    const newWidth = entry.contentRect.width;
                    const calculatedSize = (newWidth/28)-1;
                    setBorderStrokeWidth(calculatedSize);
                }
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);

        if (infoArea) {
            resizeObserver.observe(infoArea);
        }

        return () => {
            if (infoArea) {
              resizeObserver.unobserve(infoArea);
            }
          };
        }, []);


   

    const [selectedChoice, setSelectedChoice] = useState(props.question.selectedChoice);
    const [crossedChoices, setCrossedChoices] = useState(props.question.crossedChoices)

    const handleAnswerClick = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
        setCrossedChoices((prev) => {
            return (prev.map((element, index) => {
                if(index===choiceIndex){
                    return false;
                }
                return element;
            }))
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>


                {/* Area with all question Elements */}
                <div className={styles.questionZone}>


                    {/* Area with question info and button */}
                    <div className={styles.infoArea} ref={infoRef}>
                        
                        {/* Question number indicator */}
                        <div className={styles.questionNum}>
                            <h4>{props.question.questionNumber}</h4>
                        </div>


                        {/* Button "Mark for Review"  */}
                        <button className={styles.markReview} onClick={markQuestionForReview}>

                            <BookmarkIcon fillColor={markForReviewButton.backgroundColor} strokeWidth={markForReviewButton.strokeWidth}/>
                            <h5 style={{fontWeight: markForReviewButton.fontWeigth}}>Mark for Review</h5>

                        </button>


                        {/* Button to show up answer choices' crossout buttons */}
                        <div className={styles.crossOutArea}>
                            <button className={styles.crossButton} style={{backgroundColor: strikethroughOptions.backgroundColor}} onClick={toogleStrikethroughOptions}>
                            <LettersCrossedIcon color={strikethroughOptions.textColor}/>
                            </button>
                        </div>

                        {/* BottomBorder */}
                        <BottomDashedBorder childClass = {styles.borderBox} strokeWidth = {borderStrokeWidth}/>

                    </div>


                    {/* Question sentence itself */}
                    <p ref={props.reference} className={`testFont + ${styles.question}`}>
                        {questionStatement}
                    </p>

                    {/* Answer choices */}
                    <div className={styles.answerChoices}>
                        {values.map((value,index)=>{
                            return <AnswerChoice 
                                        key={index} 
                                        index ={index}
                                        isCrossed = {crossedChoices[index]}
                                        setCrossedChoices = {setCrossedChoices}
                                        isSelected = {selectedChoice === index}
                                        onClick={() => handleAnswerClick(index)}
                                        value={value} 
                                        content={contents[index]} 
                                        answerCrossoutButtonsDisplay={strikethroughOptions.displayOptions}
                                        setSelectedChoice = {setSelectedChoice}
                                    />
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestQuestion;