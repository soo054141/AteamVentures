import React from "react";
import { FilterWrapper, Selection } from "./style";
import SelectBtn from "../SelectBtn/SelectBtn";
// import { FilterNameType } from "../SelectBtn/SelectBtn";

export enum FilterNameType {
  Method = "가공방식",
  Material = "재료"
}

export interface SelectItemInterface {
  filterName: FilterNameType;
  selectCallback?: () => void;
}

export default function Filtering() {
  return (
    <FilterWrapper>
      <Selection>
        <SelectBtn filterName={FilterNameType.Method} />
        <SelectBtn filterName={FilterNameType.Material} />
      </Selection>
      <div>토글영역</div>
    </FilterWrapper>
  );
}
