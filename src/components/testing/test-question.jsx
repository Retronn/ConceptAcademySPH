import React, {useState,useRef,useEffect} from "react";
import styles from '../../styles/testQuestion.module.scss'
import AnswerChoice from "./answer-choice";

function TestQuestion(props){

    const {values} = props.question.answerChoices;
    const {contents} = props.question.answerChoices;
    const {question} = props.question;

    const [strokeSize, setStrokeSize] = useState(0);
    const infoRef = useRef(null);
    const pathElement= useRef(null);

    useEffect(() => {
        const infoArea = infoRef.current;

        const handleResize = (entries) => {
            for (let entry of entries) {
                if (entry.contentRect) {
                    const newWidth = entry.contentRect.width;
                    console.log(newWidth);
                    const calculatedSize = (newWidth/28)-2;
                    setStrokeSize(calculatedSize);
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


    return (
        <div className={styles.container}>
            <div className={styles.questionZone}>
                <div className={styles.infoArea} ref={infoRef}>
                <svg className={styles.borderBox} viewBox='0 0 300 100' preserveAspectRatio='none'>
                    <path ref={pathElement} d='M0,100 L300,100' vectorEffect='non-scaling-stroke' style={{strokeDasharray: `${strokeSize}, 2`}}/>
                </svg>
                    <div className={styles.questionNum}>
                        <h4>1</h4>
                    </div>

                    <button className={styles.markReview}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                            <path fill="white" fillRule="evenodd" 
                            d="M3.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .765.424L7.5 11.59l3.735 2.334A.5.5 0 0 0 12 13.5v-11a.5.5 0 0 0-.5-.5z" 
                            clipRule="evenodd" stroke="currentColor" strokeWidth="0.5px"/>
                        </svg>
                        <h5 style={{fontWeight: "400"}}>Mark for Review</h5>
                    </button>

                    <div className={styles.crossOutArea}>
                        <button className={styles.crossButton}>
                            <svg style={{fill: "#1E1E1E"}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.57697 74.49969">
                                <path  d="m85.47034,0l-28.76141,24.2561c-.39111-.45312-.8382-.87793-1.35638-1.26666-2.17285-1.62939-5.31641-2.44385-9.43164-2.44385h-16.24512v17.28113l-7.80127-17.28113h-6.32031L0,55.11005h6.56738l3.43536-7.99902h17.28796l.61475,1.43665L.09503,72.00171l2.10663,2.49799L87.57697,2.49805l-2.10663-2.49805ZM12.16602,42.07391l6.49664-15.12708,6.47272,15.12708h-12.96936Zm23.92871-16.4917h9.08594c2.20508,0,3.91699.39502,5.13477,1.18506.66406.43085,1.14062.98853,1.44269,1.66406l-7.92151,6.68066h-7.74188v-9.52979Zm0,14.51709h1.82825l-1.82825,1.54187v-1.54187Z"/>
                                <path  d="m62.58496,29.08759c1.10254-1.08594,2.40234-1.92529,3.90137-2.51807,1.49707-.59229,3.15137-.88867,4.96191-.88867,1.77832,0,3.43945.33789,4.9873,1.01221,1.54688.6748,2.96289,1.6875,4.24707,3.03662l4.14746-3.90088c-1.61328-1.90869-3.58887-3.34912-5.92578-4.32031-2.33691-.9707-4.9209-1.45703-7.75195-1.45703-.3642,0-.71448.02844-1.07074.04474l-23.71851,20.00311h.15057c2.37012,0,4.19727.40332,5.48047,1.20996.50739.31866.91034.71082,1.21716,1.17072.18475.73059.40808,1.44189.68536,2.12634.01202.1571.02325.3147.02325.48029,0,1.74512-.6416,3.01172-1.92578,3.80176-1.2832.79004-3.11035,1.18555-5.48047,1.18555h-10.41895v-1.31476l-6.41895,5.41345v.93744h17.23242c4.44434,0,7.79395-.82227,10.04883-2.46875.6167-.45001,1.14111-.9541,1.58917-1.50275,1.51703,1.33008,3.24103,2.39423,5.19891,3.15704,2.23828.87109,4.69141,1.30859,7.35742,1.30859,2.86426,0,5.46484-.49414,7.80176-1.48145,2.33691-.98828,4.3125-2.43555,5.92578-4.3457l-4.14746-3.90039c-1.28418,1.38184-2.7002,2.41113-4.24707,3.08594-1.54785.6748-3.20898,1.01172-4.9873,1.01172-1.81055,0-3.46484-.2959-4.96191-.88867-1.49902-.5918-2.79883-1.43164-3.90137-2.51758-1.10352-1.08691-1.9668-2.37012-2.5918-3.85156-.62598-1.48145-.93848-3.11133-.93848-4.88867,0-1.77783.3125-3.40723.93848-4.88867.625-1.48096,1.48828-2.76514,2.5918-3.85156Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <p className={`testFont + ${styles.question}`}>
                    {question}
                </p>
                <div className={styles.answerChoices}>
                    <AnswerChoice value={values[0]} content={contents[0]}/>
                    <AnswerChoice value={values[1]} content={contents[1]}/>
                    <AnswerChoice value={values[2]} content={contents[2]}/>
                    <AnswerChoice value={values[3]} content={contents[3]}/>
                </div>
            </div>
        </div>
    )
}

export default TestQuestion;