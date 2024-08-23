import React from "react";

function TrashBinIcon({color}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20 9l-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9m17-3h-5.625M3 6h5.625m0 0V4a2 2 0 0 1 2-2h2.75a2 2 0 0 1 2 2v2m-6.75 0h6.75"/>
  
        </svg>
    )
}

export default TrashBinIcon;