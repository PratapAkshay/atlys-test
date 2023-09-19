import styled from "styled-components";

export const ModuleContainer = styled.div`
  width: 463px;
  border-radius: 8px;
  padding: 40px 24px;
  box-sizing: border-box;
  border: 2px solid #969696;
  background: #27292d;
  position: relative;
  .crossContainer{
    cursor: pointer;
    align-items: center;
    width: 32px;
    height: 32px;
    justify-content: center;
    position: absolute;
    top: 16px;
    right: 16px;
    border-radius: 50%;
    display: flex;
    background: black;
  }
  .crossContainer img{
    height: 16px;
  }
  .submitButtonContainer {
    display: flex;
    justify-content: center;
    margin: 20px 0 12px 0;
  }
  .topHeadContainer {
    display: flex;
    justify-content: center;
  }
`;
