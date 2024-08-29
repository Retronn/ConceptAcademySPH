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
                      type: "standard", 
                      content:"Some scientists have suggested that mammals in the Mesozoic era were not a very ______ group, but paleontologist Zhe-Xi Luo’s research suggests that early mammals living in the shadow of dinosaurs weren’t all ground-dwelling insectivores. Fossils of various plant-eating mammals have been found in China, including species like "
                  },

                  {
                      type: "italics", 
                      content:"Vilevolodon diplomylos, "
                  },
                  {
                    type: "standard",
                    content: "which Luo says could glide like a flying squirrel."
                  }

                  
              ],

      isMarked: false,
      isAnswered: false,
      questionStatement: "Which choice completes text the text with the most logical and precise word or phrase?",
      answerChoices: {
          values: ["A","B","C","D"],
          contents: ["predatory", "obscure", "diverse", "localized"],
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
                    type: "standard", 
                    content:"Critics have asserted that fine art and fashion rarely ______ in a world where artists create timeless works for exhibition and designers periodically produce new styles for the public to buy. Luiseño/Shoshone-Bannock beadwork artist and designer Jamie Okuma challenges this view: her work can be seen in the Metropolitan Museum of Art and purchased through her online boutique.",
                },

                
            ],

    isMarked: false,
    isAnswered: false,
    questionStatement: "Which choice completes text the text with the most logical and precise word or phrase?",
    answerChoices: {
        values: ["A","B","C","D"],
        contents: ["prevail", "succumb", "diverge", "intersect"],
    },
    crossedChoices: [false,false,false,false],
    selectedChoice: null,
    },

    {
        testPart: 1,
        section: 1,
        questionNumber: 3,
        passage: [
                    {
                        type: "standard", 
                        content: "Researchers and conservationists stress that biodiversity loss due to invasive species is ______. For example, people can take simple steps such as washing their footwear after travel to avoid introducing potentially invasive organisms into new environments.",
                    },
    
                    
                ],
    
        isMarked: false,
        isAnswered: false,
        questionStatement: "Which choice completes text the text with the most logical and precise word or phrase?",
        answerChoices: {
            values: ["A","B","C","D"],
            contents: ["preventable", "undeniable", "common", "concerning"],
        },
        crossedChoices: [false,false,false,false],
        selectedChoice: null,
    },

    {
        testPart: 1,
        section: 1,
        questionNumber: 4,
        passage: [
                    {
                        type: "standard", 
                        content: "It is by no means ______ to recognize the influence of Dutch painter Hieronymus Bosch on Ali Banisadr’s paintings; indeed, Banisadr himself cites Bosch as an inspiration. However, some scholars have suggested that the ancient Mesopotamian poem ",
                    },
                    {
                        type: "italics",
                        content: "Epic of Gilgamesh ",
                    },
                    {
                        type: "standard",
                        content: "may have had a far greater impact on Banisadr’s work.",
                    }
    
                    
                ],
    
        isMarked: false,
        isAnswered: false,
        questionStatement: "Which choice completes text the text with the most logical and precise word or phrase?",
        answerChoices: {
            values: ["A","B","C","D"],
            contents: ["substantial", "satisfying", "unimportant", "appropriate"],
        },
        crossedChoices: [false,false,false,false],
        selectedChoice: null,
    },

  ]);

  const  [isReviewActive,setIsReviewActive] = useState(false);

  return (<>
    <TestHeader toogleModalOverlay={toogleModalOverlay} question={testQuestions[currentQuestion-1]}/>

      <div id={styles.container} className={modalOverlayStyle}/>
      <TestBody setTestQuestions={setTestQuestions} isReviewActive={isReviewActive} setIsReviewActive={setIsReviewActive}
                question={testQuestions[currentQuestion-1]} 
                testQuestions={testQuestions} changeQuestion={changeQuestion}
        />

      <TestFooter changeQuestion={changeQuestion} currentQuestion={currentQuestion} 
                  testQuestions = {testQuestions}
                  isReviewActive={isReviewActive} setIsReviewActive={setIsReviewActive}
       />
    
  </>)
}

export default Test;