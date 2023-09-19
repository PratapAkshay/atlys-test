import { useId } from "react";
import { CommonInput } from "./index_styles";
import { HighlightLabel } from "../../utils/common_styles";

const CustomInputs = ({firstLabel, secondLabel, inputType, placeHolderText, sideIcon}) => {

    const uniqId = useId();

    return <CommonInput>
        <div className="labelContainer">
            {firstLabel && <HighlightLabel textSize="14px" htmlFor={uniqId}>{firstLabel}</HighlightLabel>}
            {secondLabel && <HighlightLabel cursor="pointer" htmlFor={uniqId}>{secondLabel}</HighlightLabel>}
        </div>
        <div className="inputContainer">
            <input 
                id={uniqId} 
                type={inputType ? inputType : "text"} 
                placeholder={placeHolderText ? placeHolderText : ""} 
            />
            {sideIcon && <img className="sideIcon" src={sideIcon} alt="eye_Icon"/>}
        </div>
    </CommonInput>
};

export default CustomInputs;