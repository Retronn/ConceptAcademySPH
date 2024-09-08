import { IconProps } from "../../../lib/types";


export default function ScaleIcon(props:IconProps){
    return(
        <svg transform={`scale${props.transformer}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" fill={props.color}>
            <polygon  points=".375 0 .375 28.64111 6.375 28.64111 6.375 6 71.625 6 71.625 71.25 48.98438 71.25 48.98438 77.25 77.625 77.25 77.625 0 .375 0"/>
            <path d="m56,45.625h6V15.85938h-29.76562v6h19.78906l-16.76562,16.76562H0v39h39v-34.25781l17-17v19.25781Zm-23,26H6v-27h27v27Z"/>
        </svg>
    )
}
