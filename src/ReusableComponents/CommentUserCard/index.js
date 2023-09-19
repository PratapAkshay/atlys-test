import dot from "../../utils/assets/icons/Dots_Horizontal.svg";
import user from "../../utils/assets/icons/Ellipse.svg";
import {HighlightLabel, ActionLabel} from "../../utils/common_styles";
import CommentSection from "../CommentSection";
import * as styles from "./index_styles";
import bubble from "../../utils/assets/icons/Chat_Bubble.svg";

const message = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";

const CommentUserCard = () => {
    return <styles.CommentUserCard className="mb-12">
        <div className="userCardHead">
            <div className="d-flex">
                <img src={user}/>
                <div className="ml-16">
                    <HighlightLabel>User A</HighlightLabel>
                    <ActionLabel>5min ago</ActionLabel>
                </div>
            </div>
            <div className="d-flex c-pointer">
                <img src={dot}/>
            </div>
        </div>
        <div className="commentSection">
            <CommentSection emoji="👋" message={message}></CommentSection>
        </div>
        <div className="commentCount"><img src={bubble} alt="chat_icon"/><ActionLabel textSize="14px">24 Comments</ActionLabel></div>
    </styles.CommentUserCard>
}

export default CommentUserCard;