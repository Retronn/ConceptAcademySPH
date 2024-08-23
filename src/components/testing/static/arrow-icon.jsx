import React from "react";


function ArrowIcon({color, scaler=1, childClass}){

    return(
        <svg className={childClass} transform={`scale(1,${scaler})`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path fill={color} stroke={color} strokeWidth="10" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"/>
        </svg>
    )
}


export default ArrowIcon;