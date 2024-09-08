import {useEffect, useRef, useState} from "react";
import styles from '../../styles/testing/TestFooter.module.scss';
import global from "../../styles/testing/globalTesting.module.scss";

import ArrowIcon from "./static/ArrowIcon";
import CloseIcon from "./static/CloseIcon";
import MapMarkerIcon from "./static/MapMarkerIcon";
import BookmarkIcon from "./static/BookmarkIcon";
import TestQuestionLabel from "./TestQuestionLabel";

function TestFooter({testQuestions,currentQuestion,changeQuestion, isReviewActive, setIsReviewActive} : any){

    
    const testQuestion = testQuestions[0];
    const sectionInfo = `Section ${testQuestion.section}: ${(testQuestion.testPart===1) ? "Reading and Writing" : "Math"} Questions`  

    // Flipping the arrow on checking questions
    const [scaler,setScaler] = useState(1);
    const [isQuesitonOverlayActive, setIsQuesitonOverlayActive]=useState(false);
    function changeScaler(){
        setScaler(scaler*-1);
        setIsQuesitonOverlayActive(!isQuesitonOverlayActive);

    }
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const questionsButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(()=>{

        function handleClickOutside(event: any){
            if(isQuesitonOverlayActive && overlayRef.current && questionsButtonRef.current
                && !overlayRef.current.contains(event.target) 
                && !questionsButtonRef.current.contains(event.target)
            ){
                changeScaler();
            }
            
            if(nextButtonRef.current && nextButtonRef.current.classList.contains(styles.nextQuestionButtonClick) && 
                !nextButtonRef.current.contains(event.target))
            {
                nextButtonRef.current.classList.remove(styles.nextQuestionButtonClick);
            }

            if(backButtonRef.current && backButtonRef.current.classList.contains(styles.nextQuestionButtonClick) &&
                !backButtonRef.current.contains(event.target))
                {
                    backButtonRef.current.classList.remove(styles.nextQuestionButtonClick);
                }
        }
        
        document.addEventListener('mousedown',handleClickOutside);

        return () =>{
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isQuesitonOverlayActive, nextButtonDown, backButtonDown])


    const colors = {
        mainDarkColor: "#1E1E1E",
        activeRedColor: "#ab2334",
        lightRedColor: "#c13145",
        whiteColor: "#FFFFFF",
        blueColor: "#324DC7",
        lightGrayColor : "#949494",
        darkGrayColor : "#666666",
    }
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);
    const backButtonRef = useRef<HTMLButtonElement | null>(null);

    function nextButtonDown(){
        if(nextButtonRef.current){
            nextButtonRef.current.classList.add(styles.nextQuestionButtonClick);
        }
        
    }
    function backButtonDown(){
        if(backButtonRef.current){
            backButtonRef.current.classList.add(styles.nextQuestionButtonClick);
         }
        
    }


    function backButtonUp(){
        if(backButtonRef.current){
            goToThePreviousQuestion();
            backButtonRef.current.classList.remove(styles.nextQuestionButtonClick);
            backButtonRef.current.classList.add(styles.inactiveQuestionButton);
            setTimeout(()=>{
                (backButtonRef.current) ? backButtonRef.current.classList.remove(styles.inactiveQuestionButton) : null;
            },600);
        }

    }

    function nextButtonUp(){

        if(nextButtonRef.current){
        goToTheNextQuestion();


        nextButtonRef.current.classList.remove(styles.nextQuestionButtonClick);
        nextButtonRef.current.classList.add(styles.inactiveQuestionButton);
        setTimeout(()=>{
            (nextButtonRef.current) ? nextButtonRef.current.classList.remove(styles.inactiveQuestionButton) : null;
        },600);
    }
    }

    function goToTheNextQuestion(){
        if(currentQuestion!=testQuestions.length){
            changeQuestion(currentQuestion+1);
        }
        else{
            setIsReviewActive(true);
        }
    }
    
    function goToThePreviousQuestion(){
        if(isReviewActive){
            setIsReviewActive(false);
            return;
        }

        if(currentQuestion!=1){
            changeQuestion(currentQuestion-1);
        }
    }
    function activateReview(){
        setIsReviewActive(true);
        changeScaler();
    }

    

    return (
    <footer className={styles.testFooter}>

        <div ref={overlayRef} className={styles.allQuestions} style={{display: (isQuesitonOverlayActive) ? "" : "none"}}>

            <div id={styles.sectionInfo}> 
                <h4 className={global.h4}>{sectionInfo}</h4>
                <button className={styles.closeOverlay} onClick={changeScaler}> 
                    <CloseIcon color={colors.mainDarkColor}/> 
                </button>
            </div>

            <div id={styles.labelsInfo}> 
                <div className={styles.iconWithText}>
                    <MapMarkerIcon color={colors.mainDarkColor}/>
                    <p className={global.p}>Current</p>
                </div>

                <div className={styles.iconWithText}>
                    <div className={styles.dashedSqare}/> 
                    <p className={global.p}>Unanswered</p>
                </div>    

                <div className={styles.iconWithText} id={styles.bookmark}>
                    <BookmarkIcon 
                        fillColor={colors.lightRedColor} 
                        strokeColor = {colors.lightRedColor} 
                        
                        />
                    <p className={global.p}>For Review</p>
                </div>  

            </div>

            <div id={styles.questionsInfo}> 

                {testQuestions.map((question:number,index:number)=>{
                    return(
                        <TestQuestionLabel key={index} closeOverlay={changeScaler} changeQuestion={changeQuestion} question={question} isCurrent={(currentQuestion===index+1)}/>
                    )
                })}

            </div>

            <div id={styles.reviewInfo} onClick={activateReview}> 
                <button style={{fontFamily: 'Roboto'}}>Go to Review Page</button>
            </div>

        </div>
        

        <div className={styles.gridContainer}>

            {/* Users full name */}
            <div className={styles.section}>
                <h4 className={global.h4}>SAT Practice Hub</h4>
            </div>


            {/* "Questions" button */}
            <div className={styles.section} style={{display: (isReviewActive) ? "none" : "flex"}}>
                <button ref={questionsButtonRef} id={styles.testQuestionsButton} onClick={changeScaler}>
                    <h5 className={global.h5}>{`Question ${currentQuestion} of ${testQuestions.length}`}</h5>
                    <ArrowIcon scaler={scaler} color={`white`}/>
                </button>
            </div>

            {/* Next "quesiton" button */}
            <div className={styles.section} 
                    style={{flexDirection:"row", height: "3.6rem", alignItems: "center",  gap: "0.3rem",
                            justifyContent: "end", gridColumn: (isReviewActive) ? "span 8" : "span 4"}}
            >


                <div className={styles.buttonContainer} style={{display: (currentQuestion!=1 || isReviewActive) ? "flex" : "none"}}>
                    <button 
                        className={styles.nextQuestionButton} 
                        ref={backButtonRef}
                        onMouseDown={backButtonDown}
                        onMouseUp={backButtonUp}
                        
                    >
                        <h5 className={global.h5}>Back</h5>
                    </button>
                </div>


                <div className={styles.buttonContainer} style={{display: (isReviewActive) ? "none" : "flex"}}>
                    <button className={styles.nextQuestionButton} 
                            ref={nextButtonRef}
                            onMouseDown={nextButtonDown}
                            onMouseUp={nextButtonUp}
                            
                    >
                        <h5 className={global.h5}>Next</h5>
                    </button>
                </div>
            </div>

        </div>

    </footer>
    )
}

export default TestFooter;