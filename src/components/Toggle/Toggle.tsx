import { ToggleInput, ToggleLabel, ToggleSpan } from "./style";

interface ToggleInterface {
  toggleChange: (toggleState: boolean) => void;
}

export const Toggle = ({ toggleChange }: ToggleInterface) => {
  return (
    <ToggleLabel>
      <ToggleInput type={"checkbox"} onChange={(e) => toggleChange(e.target.checked)} />
      {<ToggleSpan />}
    </ToggleLabel>
  );
};

export default Toggle;
