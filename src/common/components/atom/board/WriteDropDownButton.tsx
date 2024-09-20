import TITLES from "~/constants/TitleList";
import { WriteDropdownButtonSelect } from "./WriteDropDownButtonStyles";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WriteDropdownButton = ({ value, onChange }: Props) => (
  <WriteDropdownButtonSelect value={value} onChange={onChange}>
    {Object.entries(TITLES).map(([key, [_, label]]) => (
      <option key={key} value={key}>
        {label}
      </option>
    ))}
  </WriteDropdownButtonSelect>
);

export default WriteDropdownButton;
