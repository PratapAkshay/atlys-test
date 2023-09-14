import styled from 'styled-components';

export const CommonInput = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #C5C7CA;

    .labelContainer{
        display: flex;
        justify-content: space-between;
    }

    .firstLabel,.secondLabel{
        font-size: 14px;
        font-weight: 500;
    }

    .secondLabel{
        font-size: 12px;
        cursor: pointer;
    }

    .inputContainer{
        position: relative;
    }

    .sideIcon{
        position: absolute;
        top: 50%;
        right: 10px;
        cursor: pointer;
        transform: translateY(-50%);
    }

    input{
        width: ${({width}) => width ? width : '100%'};
        padding: 12px 0 12px 12px;
        background: #35373B;
        color: #C5C7CA;
        margin: 8px 0;
        display: block;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1.5px solid #35373B;

        &::placeholder{
            color: #7F8084;
        }
    }
`;