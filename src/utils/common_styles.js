import styled from "styled-components";

export const CommonButton = styled.button`
  width: ${({ width }) => (width ? width : "111px")};
  height: ${({ height }) => (height ? height : "43px")};
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  background: #4a96ff;
  color: #fff;
  border: none;
`;

export const HighlightLabel = styled.label`
  color: #c5c7ca;
  cursor: ${({ cursor }) => (cursor ? cursor : undefined)};
  font-family: Inter;
  font-size: ${({ textSize }) => (textSize ? textSize : "12px")};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ActionLabel = styled.div`
  color: #7f8084;
  font-family: Inter;
  cursor: ${({ cursor }) => (cursor ? cursor : undefined)};
  font-size: ${({ textSize }) => (textSize ? textSize : "12px")};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TopHeaderLable = styled.label`
  color: #6b6c70;
  font-family: Inter;
  cursor: ${({ cursor }) => (cursor ? cursor : undefined)};
  font-size: ${({ textSize }) => (textSize ? textSize : "12px")};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.42px;
`;

export const TopWhiteHeaderLable = styled.label`
  color: #fff;
  cursor: ${({ cursor }) => (cursor ? cursor : undefined)};
  font-size: ${({ textSize }) => (textSize ? textSize : "12px")};
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ActionPar = styled.p`
  color: #7f8084;
  font-family: Inter;
  cursor: ${({ cursor }) => (cursor ? cursor : undefined)};
  font-size: ${({ textSize }) => (textSize ? textSize : "12px")};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2.5px);
`;
