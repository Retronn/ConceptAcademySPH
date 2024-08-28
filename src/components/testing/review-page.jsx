import React from "react";
import styles from '../../styles/reviewPage.module.scss';
import BookmarkIcon from "./static/bookmark-icon";
import TestQuestionLabel from "./test-question-label";
import DashedBorders from "./static/dashed-borders";

function ReviewPage({question,colors,testQuestions,toggleReviewPage,changeQuestion,bordersStrokeWidths, isReviewActive}){


    const sectionInfo = `Section ${question.section}: ${(question.testPart===1) ? "Reading and Writing" : "Math"} Questions` 

    return(
        <>
            <div className={`${styles.testBody} ${styles.reviewPage}`} style={{display: (isReviewActive) ? "flex" : "none"}}>

                <h4>Check Your Work</h4>
                
                <div className={styles.allQuestions}>

                    <div id={styles.sectionInfo}> 
                        <h4>{sectionInfo}</h4>


                        <div className={styles.hintsContainer}>
                            <div className={styles.iconWithText}>
                                <div className={styles.dashedSqare}/> 
                                <p>Unanswered</p>
                            </div>    

                            <div className={styles.iconWithText} id={styles.bookmark}>
                                <BookmarkIcon 
                                    fillColor={colors.lightRedColor} 
                                    strokeColor = {colors.lightRedColor} 
                                    
                                    />
                                <p>For Review</p>
                            </div>  
                        </div>

                    </div>

                    <div id={styles.questionsInfo}> 

                        {testQuestions.map((question,index)=>{
                            return(
                                <TestQuestionLabel key={index} isReview={true} closeOverlay={toggleReviewPage} changeQuestion={changeQuestion} question={question} isCurrent={false}/>
                            )
                        })}

                    </div>


                </div>
                <DashedBorders childClass={styles.borderBox} bordersStrokeWidths={bordersStrokeWidths}/>

            </div>
    </>
    )
}


export default ReviewPage;