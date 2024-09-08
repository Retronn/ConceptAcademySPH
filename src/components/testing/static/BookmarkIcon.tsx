import { IconProps } from "../../../lib/types";

export default function BookmarkIcon({strokeWidth,fillColor, strokeColor="#1e1e1e"}: IconProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
            <path fill={fillColor} fillRule="evenodd" 
            d="M3.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .765.424L7.5 11.59l3.735 2.334A.5.5 0 0 0 12 13.5v-11a.5.5 0 0 0-.5-.5z" 
            clipRule="evenodd" stroke={strokeColor} strokeWidth={strokeWidth}/>
        </svg>
    )
}

