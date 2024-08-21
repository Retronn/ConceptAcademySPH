import React, {useEffect, useRef, useState} from "react";
import styles from '../../styles/TestFooter.module.scss';

import ArrowIcon from "./static/arrow-icon";
import XIcon from "./static/x-icon";
import MapMarkerIcon from "./static/map-marker-icon";
import BookmarkIcon from "./static/bookmark-icon";
import TestQuestionLabel from "./test-question-label";

function TestFooter(props){

    // Flipping the arrow on checking questions
    const [scaler,setScaler] = useState(1);
    const [isQuesitonOverlayActive, setIsQuesitonOverlayActive]=useState(false);
    function changeScaler(){
        setScaler(scaler*-1);
        setIsQuesitonOverlayActive(!isQuesitonOverlayActive);

    }
    const overlayRef = useRef(null);
    const questionsButtonRef = useRef(null);

    useEffect(()=>{

        function handleClickOutside(event){
            if(isQuesitonOverlayActive 
                && !overlayRef.current.contains(event.target) 
                && !questionsButtonRef.current.contains(event.target)
            ){
                changeScaler();
            }
            
        }
        
        document.addEventListener('click',handleClickOutside);

        return () =>{
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isQuesitonOverlayActive])


    const colors = {
        mainDarkColor: "#1E1E1E",
        activeRedColor: "#ab2334",
        whiteColor: "#FFFFFF",
        blueColor: "#324DC7",
        lightGrayColor : "#949494",
        darkGrayColor : "#666666",
    }

    return (
    <footer className={styles.testFooter}>

        <div ref={overlayRef} className={styles.allQuestions} style={{display: (isQuesitonOverlayActive) ? "" : "none"}}>

            <div id={styles.sectionInfo}> 
                <h4>Section 1: Reading and Writing Questions</h4>
                <button className={styles.closeOverlay} onClick={changeScaler}> 
                    <XIcon color={colors.mainDarkColor}/> 
                </button>
            </div>

            <div id={styles.labelsInfo}> 
                <div className={styles.iconWithText}>
                    <MapMarkerIcon color={colors.mainDarkColor}/>
                    <p>Current</p>
                </div>

                <div className={styles.iconWithText}>
                    <div className={styles.dashedSqare}/> 
                    <p>Unanswered</p>
                </div>    

                <div className={styles.iconWithText} id={styles.bookmark}>
                    <BookmarkIcon 
                        fillColor={colors.activeRedColor} 
                        strokeColor = {colors.activeRedColor} 
                        
                        />
                    <p>For Review</p>
                </div>  

            </div>

            <div id={styles.questionsInfo}> 
                <TestQuestionLabel questionNum={1} isCurrent={true}/>
                <TestQuestionLabel questionNum={1} isCurrent={false}/>
                <TestQuestionLabel questionNum={1} isCurrent={false}/>
                <TestQuestionLabel questionNum={1} isCurrent={false}/>

            </div>

            <div id={styles.reviewInfo}> 
                <button>Go to Review Page</button>
            </div>

        </div>
        

        <div className={styles.gridContainer}>

            {/* Users full name */}
            <div className={styles.section}>
                <h4>Alexandr Tkachyov</h4>
            </div>


            {/* "Questions" button */}
            <div className={styles.section}>
                <button ref={questionsButtonRef} id={styles.testQuestionsButton} onClick={changeScaler}>
                    <h5>Question 1 of 8</h5>
                    <ArrowIcon scaler={scaler} color={`white`}/>
                </button>
            </div>

            {/* Next "quesiton" button */}
            <div className={styles.section}>
                <button id={styles.nextQuestionButton}><h5>Next</h5></button>
            </div>

        </div>

    </footer>
    )
}

export default TestFooter;