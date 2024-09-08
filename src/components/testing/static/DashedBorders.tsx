import { IconProps } from "../../../lib/types";


export default  function DashedBorders(props: IconProps){
    return (
        <svg className={props.childClass} viewBox='0 0 300 100' preserveAspectRatio='none'>
            <path d='M0,0 L300,0 M0,100 L300,100' vectorEffect='non-scaling-stroke' style={{strokeDasharray: `${props.bordersStrokeWidths}, 2`}}/>
        </svg>
    )
}
