import {
  CheckboxLabel,
  CheckboxWrapper,
  OptionWrapper,
  RefreshIcon,
  RefreshWrap,
  StyledCheckbox,
  StyledSelectBox
} from "./style";
import { useCallback, useEffect, useState } from "react";
import refresh from "../../images/refresh_24px.svg";

enum SubjectType {
  Method = "가공방식",
  Material = "재료"
}
const method = ["밀링", "선반"];
const material = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

interface SelectBoxInterface {
  selectBoxChange: (filterArray: string[]) => void;
}

const SelectBox = ({ selectBoxChange }: SelectBoxInterface) => {
  const [openTarget, setOpenTarget] = useState<SubjectType | null>(null);
  const [methodSelect, setMethodSelect] = useState<string[]>([]);
  const [materialSelect, setMaterialSelect] = useState<string[]>([]);

  const openOptions = useCallback(
    (target: SubjectType) => {
      if (openTarget === target) {
        setOpenTarget(null);
      } else {
        setOpenTarget(target);
      }
    },
    [openTarget]
  );

  useEffect(() => {
    selectBoxChange([...methodSelect, ...materialSelect]);
  }, [materialSelect, methodSelect]);

  const changeCheckbox = useCallback(
    (type: SubjectType, option: string, isChecked: boolean) => {
      if (type === SubjectType.Method) {
        const currentMethodSelect = new Set(methodSelect);
        if (isChecked) {
          currentMethodSelect.add(option);
        } else {
          currentMethodSelect.delete(option);
        }
        setMethodSelect([...currentMethodSelect]);
      } else {
        const currentMaterialSelect = new Set(materialSelect);
        if (isChecked) {
          currentMaterialSelect.add(option);
        } else {
          currentMaterialSelect.delete(option);
        }
        setMaterialSelect([...currentMaterialSelect]);
      }
    },
    [materialSelect, methodSelect]
  );

  const renderCheckBox = useCallback(
    (type: SubjectType) => {
      const options = type === SubjectType.Method ? method : material;
      return options.map((option: string) => (
        <CheckboxWrapper key={option}>
          <StyledCheckbox
            type={"checkbox"}
            checked={
              type === SubjectType.Method ? methodSelect.includes(option) : materialSelect.includes(option)
            }
            onChange={(e) => changeCheckbox(type, option, e.target.checked)}
          />
          <CheckboxLabel>{option}</CheckboxLabel>
        </CheckboxWrapper>
      ));
    },
    [changeCheckbox]
  );

  const renderSelectBox = useCallback(() => {
    return Object.values(SubjectType).map((el: SubjectType) => {
      const count = el === SubjectType.Method ? methodSelect.length || "" : materialSelect.length || "";
      return (
        <StyledSelectBox key={el} onClick={() => openOptions(el)} selected={!!count}>
          {`${el}${count && `(${count})`}`}
          <OptionWrapper visible={openTarget === el} onClick={(e) => e.stopPropagation()}>
            {renderCheckBox(el)}
          </OptionWrapper>
        </StyledSelectBox>
      );
    });
  }, [materialSelect, methodSelect, openOptions, openTarget, renderCheckBox]);

  const resetFilter = useCallback(() => {
    setOpenTarget(null);
    setMethodSelect([]);
    setMaterialSelect([]);
  }, []);

  return (
    <>
      {renderSelectBox()}
      {(methodSelect.length > 0 || materialSelect.length > 0) && (
        <RefreshWrap onClick={resetFilter}>
          <RefreshIcon src={refresh} />
          필터링 리셋
        </RefreshWrap>
      )}
    </>
  );
};

export default SelectBox;
