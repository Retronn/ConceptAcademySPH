import React, {useState} from "react";
import TestHeader from "./test-header";
import TestFooter from "./test-footer";
import TestBody from "./test-body";
import styles from "../../styles/test.module.scss";

function Test(){

  const [modalOverlayStyle, setModalOverlayStyle] = useState("");
  function toogleModalOverlay(){
      setModalOverlayStyle(modalOverlayStyle==="" ? styles.modalOverlay : "");
      
  }
  const [currentQuestion, setCurrentQuestion] = useState(1);

  function changeQuestion(newQuestionNum){
    setCurrentQuestion(newQuestionNum);
  }

  const [testQuestions, setTestQuestions]=useState([
    {
      testPart: 1,
      section: 1,
      questionNumber: 1,
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
      crossedChoices: [false,false,false,false],
      selectedChoice: null,
  },
  {
    testPart: 1,
    section: 1,
    questionNumber: 2,
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
                                        type: "italics",
                                        content:"Scientists have developed a “freeze-thaw” battery that can retain 92% of its charge after twelve weeks.",
                                    }
                                ],

                                [   
                                    {
                                        type: "italics",
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
    crossedChoices: [false,false,false,false],
    selectedChoice: null,
}
  ]);

  
  return (<>
    <TestHeader toogleModalOverlay={toogleModalOverlay}/>

      <div id={styles.container} className={modalOverlayStyle}/>
      <TestBody setTestQuestions={setTestQuestions} question={testQuestions[currentQuestion-1]}/>
      <TestFooter changeQuestion={changeQuestion} currentQuestion={currentQuestion} testQuestions = {testQuestions}/>
    
  </>)
}

export default Test;