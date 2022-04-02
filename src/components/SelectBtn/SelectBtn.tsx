import { useState } from "react";
import {
  SelectBtnContainer,
  SelectBox,
  Menu,
  NameWrapper,
  ArrowWrapper,
  ItemList,
  CheckBox,
  ItemName
} from "./style";
import { ViewItems } from "../ViewItems/style";
import { SelectItemInterface } from "../Filtering/Filtering";
import Arrow from "../../images/arrow_drop_down_24px.svg";

const MethodType = ["밀링", "선반"];
const MaterialType = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

export default function SelectBtn({ filterName, isReset, selectCallback }: SelectItemInterface) {
  const [isSelected, setIsSelected] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.add(id);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
    }
    setCheckedItems(checkedItems);
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(!isSelected);
    checkedItemHandler(e.target.value, e.target.checked);
  };

  const renderSelectItem = () => {
    if (filterName === "가공방식") {
      return MethodType.map((itemText) => (
        <ItemList key={itemText}>
          <CheckBox value={itemText} onChange={checkHandler} type="checkbox" />
          <ItemName>{itemText}</ItemName>
        </ItemList>
      ));
    } else {
      return MaterialType.map((itemText) => (
        <ItemList key={itemText}>
          <CheckBox value={itemText} onChange={checkHandler} type="checkbox" />
          <ItemName>{itemText}</ItemName>
        </ItemList>
      ));
    }
  };

  return (
    <SelectBtnContainer>
      <SelectBox
        onClick={() => {
          console.log("hi");
        }}
      >
        <Menu isClicked={checkedItems.size > 0 ? true : false}>
          <NameWrapper>
            {filterName}({checkedItems.size})
          </NameWrapper>
          <ArrowWrapper>
            <img src={Arrow} />
          </ArrowWrapper>
        </Menu>
      </SelectBox>
      <ViewItems>{renderSelectItem()}</ViewItems>
    </SelectBtnContainer>
  );
}
