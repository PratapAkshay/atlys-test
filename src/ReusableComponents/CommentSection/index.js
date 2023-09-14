import { ActionLabel } from "../../utils/common_styles";
import * as styles from "./index_styles";

const CommentSection = () => {
  return (
    <styles.CommentSection>
      <div className="reaction">
        <span>👋</span>
      </div>
      <div className="comment">
        <ActionLabel>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </ActionLabel>
      </div>
    </styles.CommentSection>
  );
};

export default CommentSection;
