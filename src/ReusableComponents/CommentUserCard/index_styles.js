import { styled } from "styled-components";

export const CommentUserCard = styled.div`
    border-radius: 8px;
    padding: 24px 20px;
    box-sizing: border-box;
    border: 2px solid #35373B;
    background: #27292D;
    width: 700px;
    height: 250px;

    .userCardHead{
        display: flex;
        justify-content: space-between;
    }

    .commentCount img{
        margin-right: 8px;
    }

    .commentCount div{
        display: inline-block;
        vertical-align: text-top;
    }
`