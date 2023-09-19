import LoginModal from "../LoginModal";
import * as styles from "./index_styles";
import logo from "../../utils/assets/icons/Logo.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const nav = useNavigate();

  return (
    <styles.LoginPage>
      <img src={logo}></img>
      <LoginModal onClick={() => nav("home")}/>
    </styles.LoginPage>
  );
};

export default LoginPage;
