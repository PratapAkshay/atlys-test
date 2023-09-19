import { styled } from "styled-components"

export const CommentSection = styled.div`
    border-radius: 8px;
    background: #191920;
    margin: 14px 0;
    display: flex;

    .reaction{
        display: inline-block;
        width: 48px;
        margin: 16px;
        position: relative;
        background: #27292D;
        height: 48px;
        border-radius: 50%;
    }

    .reaction span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .comment{
        width: 86%;
        display: flex;
        align-items: center;
        vertical-align: top;
    }

    .comment div{
        font-size: 16px !important;
        line-height: 150% !important;
    }
`;

export const CommentInput = styled.input`
    color: #7F8084;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    background: transparent;
    border: none;
    outline: none;
`; 