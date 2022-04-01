import styled from "styled-components";

export const SelectBox = styled.div`
  font-size: 12px;

  &:not(:first-child) {
    margin-left: 12px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 12px;

  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const NameWrapper = styled.div``;

export const ArrowWrapper = styled.div`
  margin-left: 12px;
  display: flex;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  margin: 17px 12px;
  border: 1px solid red;
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border: 2px solid #939fa5;
  box-sizing: border-box;
  border-radius: 2px;
  margin-right: 10px;
  margin-left: 12px;
`;

export const ItemName = styled.div``;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`;

export const Description = styled.h2`
  font-size: 16px;
  line-height: 24px;
`;
