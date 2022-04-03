import { FilterWrapper, Selection, ToggleWrapper, ToggleText } from "./style";
import Toggle from "../Toggle/Toggle";
import SelectBox from "../SelectBox/SelectBox";

export interface FilteringInterface {
  toggleChange: (toggleState: boolean) => void;
  selectBoxChange: (filterArray: string[]) => void;
}

export default function Filtering({ toggleChange, selectBoxChange }: FilteringInterface) {
  return (
    <FilterWrapper>
      <Selection>
        <SelectBox selectBoxChange={selectBoxChange} />
      </Selection>
      <ToggleWrapper>
        <Toggle toggleChange={toggleChange} />
        <ToggleText>상담 중인 요청만 보기</ToggleText>
      </ToggleWrapper>
    </FilterWrapper>
  );
}
