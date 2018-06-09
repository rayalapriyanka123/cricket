export interface datatype  {
    runScored: number,
    isOut: boolean,
    isExtra?:boolean,
    extraType?:string,
    extraInfo?:ExtraInfo,
    dismissalType?: string,
    dismissalInfo?: DismissalInfo,
    batsmanName: string,
    bowlerName: string,
}

export interface DismissalInfo {
    fielderName: String,
    hasBatsmanCrossed: true,
}
export interface ExtraInfo {
    runsOffered: number
}