import styled from "styled-components";

export const SelectBtnContainer = styled.div`
  display: flex;
  background-color: blue;

  &:not(:first-child) {
    margin-left: 12px;
  }
`;
export const SelectBox = styled.div`
  font-size: 12px;
  background-color: white;
`;

interface MenuInterface {
  isClicked: boolean;
}

export const Menu = styled.div<MenuInterface>`
  display: flex;
  align-items: center;
  padding: 9px 12px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  cursor: pointer;

  background-color: ${(props) => (props.isClicked ? props.theme.colors.primary : "#ffffff")};
  color: ${(props) => (props.isClicked ? "#ffffff" : "")};
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
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border: 2px solid #939fa5;
  border-radius: 2px;
  margin-right: 10px;
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
