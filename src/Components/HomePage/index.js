import React from "react";
import { HighlightLabel, ActionLabel } from "../../utils/common_styles";
import CommentUserCard from "../../ReusableComponents/CommentUserCard";
import * as style from "./index_styles";
const HomePage = () => {
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
          <CommentUserCard />
          <CommentUserCard />
          <CommentUserCard />
          <CommentUserCard />
        </div>
      </div>
    </style.HomePage>
  );
};

export default HomePage;
