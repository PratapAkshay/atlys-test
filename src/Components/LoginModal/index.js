import * as Styles from "./index_styles";
import CustomInputs from "../../ReusableComponents/CustomInputs";
import eye from "../../utils/assets/icons/eye.svg";
import {
  CommonButton,
  ActionLabel,
  HighlightLabel,
  TopHeaderLable,
  TopWhiteHeaderLable,
} from "../../utils/common_styles";

const LoginModal = ({ onClick }) => {
  return (
    <Styles.ModuleContainer>
      <div className="topHeadContainer mb-8">
        <TopHeaderLable textSize="14px">Welcome Back</TopHeaderLable>
      </div>
      <div className="topHeadContainer mb-45">
        <TopWhiteHeaderLable textSize="18px">
          Login into your account
        </TopWhiteHeaderLable>
      </div>
      <div>
        <CustomInputs
          firstLabel={"Email and Username"}
          placeHolderText="Enter your email or username"
        />
        <CustomInputs
          sideIcon={eye}
          type="password"
          firstLabel={"Enter your password"}
          placeHolderText="password"
          secondLabel="Forgot passward ?"
        />
        <div className="submitButtonContainer">
          <CommonButton
            onClick={onClick ? () => onClick() : () => {}}
            width="100%"
          >
            Login now
          </CommonButton>
        </div>
        <ActionLabel>
          Not registered yet?{" "}
          <HighlightLabel cursor="pointer">Register →</HighlightLabel>
        </ActionLabel>
      </div>
    </Styles.ModuleContainer>
  );
};

export default LoginModal;
