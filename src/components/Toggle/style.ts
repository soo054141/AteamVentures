import styled from "styled-components";

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 14px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked {
    & + span {
      background-color: #bbdefb;
    }
    & + span:before {
      background-color: #2196f3;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
      transform: translateX(20px);
    }
  }
`;

export const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: #c2c2c2;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: -3px;
    bottom: -3px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    -webkit-transition: 0.5s;
    transition: 0.4s;
  }
`;
