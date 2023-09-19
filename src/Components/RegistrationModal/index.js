import * as Styles from "./index_styles";
import CustomInputs from "../../ReusableComponents/CustomInputs";
import eye from "../../utils/assets/icons/eye.svg";
import cross from "../../utils/assets/icons/Cross.svg";
import {
  CommonButton,
  ActionLabel,
  HighlightLabel,
  TopHeaderLable,
  TopWhiteHeaderLable,
} from "../../utils/common_styles";

const RegistrationModal = ({ onClick, onClose, loginClickHandler }) => {
  return (
    <Styles.ModuleContainer>
      {onClose && (
        <div className="crossContainer" onClick={onClose}>
          <img src={cross} arg="cross" />
        </div>
      )}
      <div className="topHeadContainer mb-8">
        <TopHeaderLable textSize="14px">SIGN UP</TopHeaderLable>
      </div>
      <div className="topHeadContainer mb-45">
        <TopWhiteHeaderLable textSize="18px">
          Create an account to continue
        </TopWhiteHeaderLable>
      </div>
      <div>
        <CustomInputs firstLabel={"Email"} placeHolderText="Enter your email" />
        <CustomInputs
          firstLabel={"Username"}
          placeHolderText="Choose a preferred username"
        />
        <CustomInputs
          sideIcon={eye}
          type="password"
          firstLabel={"Password"}
          placeHolderText="Choose a strong password"
        />
        <div className="submitButtonContainer">
          <CommonButton
            onClick={onClick ? () => onClick() : () => {}}
            width="100%"
          >
            Continue
          </CommonButton>
        </div>
        <ActionLabel>
          Already have an account?{" "}
          <HighlightLabel onClick={loginClickHandler} cursor="pointer">
            Login →
          </HighlightLabel>
        </ActionLabel>
      </div>
    </Styles.ModuleContainer>
  );
};

export default RegistrationModal;
