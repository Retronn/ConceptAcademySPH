type FormEvent = React.FormEvent<HTMLFormElement>
type MouseEvent = React.MouseEvent<HTMLButtonElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>




type TestQuestion =
{
    testPart: number,
    section: number,
    
    passage: Record<string,string>[],

    questionNumber: number,
    isAnswered: boolean,
    isMarked: boolean,

    questionStatement: string,
    answerChoices: Record<string, string[]>,
    crossedChoices: boolean[],
    selectedChoice: number | null,

}


type IconProps = {
    color?: string,
    scaler?: number,
    childClass?: string,
    fillColor?: string,
    strokeColor?: string,
    strokeWidth?: number,
    bordersStrokeWidths?: number,
    isActive?: boolean,
    isInLabel?: boolean,
    transformer?: string,
    display?: string,
}



export type {TestQuestion, FormEvent, MouseEvent, ChangeEvent,IconProps};