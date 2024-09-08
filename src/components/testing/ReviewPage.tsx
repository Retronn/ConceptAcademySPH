import styles from '../../styles/testing/reviewPage.module.scss';
import global from "../../styles/testing/globalTesting.module.scss";
import BookmarkIcon from "./static/BookmarkIcon";
import TestQuestionLabel from "./TestQuestionLabel";
import DashedBorders from "./static/DashedBorders";
import { TestQuestion } from '../../lib/types';
import { COLORS } from '../../lib/constants';

type ReviewPageProps = {
    question: TestQuestion,
    testQuestions: TestQuestion[],
    toggleReviewPage: () => void,
    changeQuestion: (numOfQuestionToSet: number) => void,
    bordersStrokeWidths: number,
    isReviewActive: boolean,
}


function ReviewPage({question,testQuestions,toggleReviewPage,changeQuestion,bordersStrokeWidths, isReviewActive} : ReviewPageProps){


    const sectionInfo = `Section ${question.section}: ${(question.testPart===1) ? "Reading and Writing" : "Math"} Questions` 

    return(
        <>
            <div className={`${styles.testBody} ${styles.reviewPage}`} style={{display: (isReviewActive) ? "flex" : "none"}}>

                <h4 className={global.h6}>Check Your Work</h4>
                
                <div className={styles.allQuestions}>

                    <div id={styles.sectionInfo}> 
                        <h4 className={global.h4}>{sectionInfo}</h4>


                        <div className={styles.hintsContainer}>
                            <div className={styles.iconWithText}>
                                <div className={styles.dashedSqare}/> 
                                <p className={global.p}>Unanswered</p>
                            </div>    

                            <div className={styles.iconWithText} id={styles.bookmark}>
                                <BookmarkIcon 
                                    
                                    fillColor={COLORS.lightRedColor} 
                                    strokeColor = {COLORS.lightRedColor} 
                                    
                                    />
                                <p className={global.p}>For Review</p>
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