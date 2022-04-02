import React from "react";
import { FilterWrapper, Selection } from "./style";
import SelectBtn from "../SelectBtn/SelectBtn";
// import { FilterNameType } from "../SelectBtn/SelectBtn";
import { useState } from "react";

export enum FilterNameType {
  Method = "가공방식",
  Material = "재료"
}

export interface SelectItemInterface {
  filterName: FilterNameType;
  selectCallback?: () => void;
  isReset?: any;
}

export default function Filtering() {
  const [isReset, setReset] = useState(true);

  return (
    <FilterWrapper>
      <Selection>
        <SelectBtn filterName={FilterNameType.Method} isReset={isReset} />
        <SelectBtn filterName={FilterNameType.Material} />
      </Selection>
      <div>토글영역</div>
    </FilterWrapper>
  );
}
