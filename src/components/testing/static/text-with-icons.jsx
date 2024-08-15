import React from "react";

function TextWithIcons(props){
    return(
        <div className={props.textWithIconStyle} onClick={props.toHandle}>
                            
            <div className={props.centerIconsStyle}>

                {props.icons.map((icon) => icon)}
            </div>

            <h6>{props.text}</h6>
        
        </div>
    )

}

export default TextWithIcons;