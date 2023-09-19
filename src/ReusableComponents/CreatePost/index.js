import dot from "../../utils/assets/icons/Dots_Horizontal.svg";
import user from "../../utils/assets/icons/Ellipse.svg";
import { HighlightLabel, ActionLabel } from "../../utils/common_styles";
import CommentSection from "../CommentSection";
import {CommonButton} from "../../utils/common_styles"
import * as styles from "./index_styles";
import bubble from "../../utils/assets/icons/Chat_Bubble.svg";

const CreatePost = ({ submitPost }) => {
  return (
    <styles.CreatePost className="mb-12">
      <div className="userCardHead">
        <div className="d-flex">
          <HighlightLabel textSize="18px">User A</HighlightLabel>
          {/* <img src={user}/>
                <div className="ml-16">
                    <HighlightLabel>User A</HighlightLabel>
                    <ActionLabel>5min ago</ActionLabel>
                </div> */}
        </div>
        <div className="d-flex c-pointer">
          <img src={dot} />
        </div>
      </div>
      <div className="commentSection">
        <CommentSection
          emoji="💬"
          editable={true}
          placeHolder="How are you feeling today?"
        ></CommentSection>
      </div>
      <div className="postContainer">
        <CommonButton
          onClick={submitPost}
          width="111px"
        >
         Post
        </CommonButton>
      </div>
    </styles.CreatePost>
  );
};

export default CreatePost;
