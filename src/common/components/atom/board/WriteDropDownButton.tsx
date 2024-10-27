import TITLES from "~/constants/TitleList";
import { WriteDropdownButtonSelect } from "./WriteDropDownButtonStyles";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WriteDropdownButton = ({ value, onChange }: Props) => (
  <WriteDropdownButtonSelect value={value} onChange={onChange}>
    {Object.entries(TITLES).map(([title, [_, koreanTitle]]) => (
      <option key={title} value={title}>
        {koreanTitle}
      </option>
    ))}
  </WriteDropdownButtonSelect>
);

export default WriteDropdownButton;
