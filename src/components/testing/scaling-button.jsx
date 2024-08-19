import React from "react";
import ScaleIcon from "./static/scale-icon";
import styles from '../../styles/scalingButton.module.scss'

function ScalingButton(props){


    const handleRescale = () => {
        
        if(props.scalerId==="testPassageScaler"){
            console.log(props.resizePosition);
            


            if(props.resizePosition==="middle" || props.resizePosition==="part-right"){
                props.scaleObject.current.style.width= "66%";
                props.setResizePosition("right");
                props.setTransformer({
                    passage: "(-1,-1)",
                    question: "(-1,1)",
                })
            }
            else{
                props.scaleObject.current.style.width= "calc(50% - 6px)";
                props.setResizePosition("middle"); 
                props.setTransformer({
                    passage: "(1,1)",
                    question: "(-1,1)",
                })

            }
        }

        else{

            if(props.resizePosition==="middle" || props.resizePosition==="part-left"){
                props.scaleObject.current.style.width= "33%";
                props.setResizePosition("left");
                props.setTransformer({
                    passage: "(1,1)",
                    question: "(1,-1)",
                })
            }
            else{
                props.scaleObject.current.style.width= "calc(50% - 6px)";
                props.setResizePosition("middle"); 
                props.setTransformer({
                    passage: "(1,1)",
                    question: "(-1,1)",
                })
            }

        }
    }

    return(


        <button id={props.scalerId} className={styles.scaleButton} onClick={handleRescale}>
            <ScaleIcon color={props.color} transformer={props.transformer}/>
        </button>
    )
}


export default ScalingButton;