import { ActionPar } from "../../utils/common_styles";
import * as styles from "./index_styles";

const CommentSection = ({message, placeHolder, emoji, editable}) => {
  return (
    <styles.CommentSection>
      <div className="reaction">
        <span>{emoji ? emoji : " "}</span>
      </div>
      <div className="comment">
        {editable ? <styles.CommentInput placeholder={placeHolder}/> :
        <ActionPar textSize="16px">
          {message ? message : placeHolder ? placeHolder : null}
        </ActionPar>
        }
      </div>
    </styles.CommentSection>
  );
};

export default CommentSection;
