import React from "react"


function WarningIcon({strokeColor="#1e1e1e"}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17" />
            <path fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95" />
            <path fill={strokeColor} d="M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20" />
        </svg>
    )
}

export default WarningIcon;