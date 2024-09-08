import { useRef, useEffect } from "react";
import global from "../../styles/testing/globalTesting.module.scss";
import styles from "../../styles/testing/answerChoice.module.scss"
import { TestQuestion } from "../../lib/types";



type AnswerChoiceProps = {
    isSelected: boolean,
    questionNum: number,
    index: number,
    setTestQuestions: any,
    isCrossed: boolean,
    answerCrossoutButtonsDisplay: string,
    value: string,
    content: string,
}


function AnswerChoice(props:AnswerChoiceProps){

    const answerRef = useRef<HTMLButtonElement | null>(null);
    const handleClickOutside = (event: any) => {
        if (props.isSelected && answerRef.current && !answerRef.current.contains(event.target as Node)) {

          setOutlineOn();
          
        }
      };
    
    useEffect(() => {

        
        if (props.isSelected){
            document.addEventListener('mousedown', handleClickOutside);
        }
        
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [props.isSelected]);

    



    function toggleCrossAnswerChoice(){



        props.setTestQuestions((testQuestions: TestQuestion[]): TestQuestion[] => {
            
            return( testQuestions.map((testQuestion,index)=>{
                if(index===props.questionNum-1){

                    
                    return (
                        {
                            ...testQuestion,
                            crossedChoices: (testQuestion.crossedChoices.map((choice,index)=>{
                                if(index===props.index){
                                    return !choice;
                                }
                                return choice;
                            })),
                            selectedChoice: (props.isSelected) ? null : testQuestion.selectedChoice,
                            isAnswered: (props.isSelected) ? false : testQuestion.isAnswered,
                        }
                    )
                }
                return testQuestion;
            }));
           
        })

    }

    function setAnswerChoice(choiceIndex:number){    

        props.setTestQuestions( (testQuestions:TestQuestion[]) :TestQuestion[] => 
            
            { 
            return testQuestions.map((testQuestion:TestQuestion,index:number)=>{
                if(index===props.questionNum-1){
                    return(
                        {
                            ...testQuestion,
                            crossedChoices: (testQuestion.crossedChoices.map((choice:boolean,index:number)=>{
                                if(index===props.index){
                                    return false;
                                }
                                return choice;
                            })),
                            selectedChoice: choiceIndex,
                            isAnswered: true,
                        }
                    )
                }
                return testQuestion;
            })
        })
    }


    


    function handleClick(){
        setAnswerChoice(props.index);


        setOutlineOff();
    }
    function setOutlineOff(){
        if(answerRef.current && props.isSelected){
            answerRef.current.style.border = "calc(1px/16) solid #324DC7";
            answerRef.current.style.outline = "0.125rem solid #E59700";
        }

    }
    function setOutlineOn(){
        
        if(answerRef.current && props.isSelected){
            answerRef.current.style.outline = "0.125rem solid #324DC7";
        }
    }
    

   

    return (
        <div className={styles.answerChoiceArea}>
            
            
            {/* Answer choice button */}
            <button 
                ref={answerRef} 
                onMouseDown={setOutlineOn} 
                onMouseUp={handleClick} 
                
                className={`${styles.answer} ${(props.isCrossed && props.answerCrossoutButtonsDisplay!="none") ? styles.crossAnswerChoice : ""}`}
                style={{
                    outline: props.isSelected ? '0.125rem solid #E59700' : '',
                    border: props.isSelected ? "calc(1px/16) solid #324DC7" : "calc(1px/16) solid #1E1E1E",
                }}
            >
                    

                <div 
                    className={`${styles.answerLetter} ${(props.isCrossed && props.answerCrossoutButtonsDisplay!="none") ? styles.inactiveText : ""}`}
                    style={{
                        backgroundColor: props.isSelected ? '#324DC7' : 'white',
                        color: props.isSelected ? 'white' : '#505050',
                    }}
                
                > {props.value} </div>

                <p className={`${global.testFont} ${styles.answerText}  ${(props.isCrossed && props.answerCrossoutButtonsDisplay!="none") ? styles.inactiveText : ""}`}>{props.content}</p>

            </button>

            {/* Cross the answer choice out button */}
            <button onClick={toggleCrossAnswerChoice} className={styles.answerCrossoutButton} style={{display: props.answerCrossoutButtonsDisplay}}>
                <div className={`${styles.answerLetter} ${global.mainFont}`} id="crossOut" style={{display: (props.isCrossed) ? "none" : ""}}>
                    {props.value}
                </div>
                <h6 className={global.h6} style={{display: (props.isCrossed) ? "" : "none"}}>Undo</h6>
            </button>

        </div>
    )

}

export default AnswerChoice;