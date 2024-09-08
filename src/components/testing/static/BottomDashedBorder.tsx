import { IconProps } from "../../../lib/types";


export default function BottomDashedBorder(props: IconProps){
    return(
        <svg className={props.childClass} viewBox='0 0 300 100' preserveAspectRatio='none'>
            <path d='M0,100 L300,100' vectorEffect='non-scaling-stroke' style={{strokeDasharray: `${props.strokeWidth}, 2`}}/>
        </svg>
    )
}


