import styled from "styled-components";
import arrowDropDownGray from "src/images/arrow_drop_down_24px_gray.svg";
import arrowDropDownWhite from "src/images/arrow_drop_down_24px_white.svg";

interface SelectBoxInterface {
  selected: boolean;
}

export const StyledSelectBox = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  appearance: none;
  padding: 9px 41px 9px 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #323d45;
  background-color: #fff;

  background-image: url(${arrowDropDownGray});
  background-repeat: no-repeat;
  background-size: 10px 5px;
  background-position: right 19px center;

  cursor: pointer;
  user-select: none;

  ${({ selected }: SelectBoxInterface) =>
    selected &&
    `color: #fff;
          background-image: url(${arrowDropDownWhite});
          background-color: #1565C0;`}

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

interface OptionWrapperInterface {
  visible: boolean;
}

export const OptionWrapper = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  display: flex;
  flex-flow: column;
  gap: 8px;
  width: 130px;
  padding: 16px 0;
  border: 1px solid ${(props) => props.theme.colors.gray};
  background-color: #ffffff;
  border-radius: 4px;

  ${({ visible }: OptionWrapperInterface) => (visible ? "" : `display: none;`)};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled.input`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 14px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #323d45;
`;

export const RefreshWrap = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`;

export const RefreshIcon = styled.img`
  width: 24px;
  height: 24px;
`;
