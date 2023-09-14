import LoginModal from "../LoginModal";
import * as styles from "./index_styles";
import logo from "../../utils/assets/icons/Logo.svg";

const LoginPage = () => {
  return (
    <styles.LoginPage>
      <img src={logo}></img>
      <LoginModal />
    </styles.LoginPage>
  );
};

export default LoginPage;
