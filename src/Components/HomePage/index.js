import React, { useState } from "react";
import { HighlightLabel, ActionLabel, PopUpContainer } from "../../utils/common_styles";
import CommentUserCard from "../../ReusableComponents/CommentUserCard";
import * as style from "./index_styles";
import CreatePost from "../../ReusableComponents/CreatePost";
import RegistrationModal from "../RegistrationModal";
import LoginModal from "../LoginModal";

const HomePage = () => {

  const [showRegistrationPopOver,setShowRegistrationPopOver] = useState(false);
  const [modaltoDisplay, setModalToDisplay] = useState("register");

  const submitPosthandler = () => {
    setShowRegistrationPopOver(prev => !prev);
  }

  const registerOnCloseHandler = () => {
    setShowRegistrationPopOver(false);
    setModalToDisplay("register");
  }

  const onRegisterClickInLoginModal = () => {
    setModalToDisplay("register");
  }

  const onLoginClickInRegisterModal = () => {
    setModalToDisplay("login");
  }

  return (
    <style.HomePage>
      <div>
        <div className="userHeading mb-12">
          <HighlightLabel textSize="28px">Hello Jane</HighlightLabel>
        </div>
        <div className="mb-40 w-580">
          <ActionLabel textSize="16px">
            How are you doing today? Would you like to share something with the
            community 🤗
          </ActionLabel>
        </div>
        <div>
          <CreatePost submitPost={submitPosthandler}/>
          <CommentUserCard />
          <CommentUserCard />
          <CommentUserCard />
          <CommentUserCard />
        </div>
        {showRegistrationPopOver && <PopUpContainer>
          <div>
            {modaltoDisplay === "register" ? 
              <RegistrationModal loginClickHandler={() => onLoginClickInRegisterModal()} onClose={() => registerOnCloseHandler()}/> :
              <LoginModal registerClickHandler={() => onRegisterClickInLoginModal()} onClose={() => registerOnCloseHandler()}/>
            }
          </div>
        </PopUpContainer>}
      </div>
    </style.HomePage>
  );
};

export default HomePage;
