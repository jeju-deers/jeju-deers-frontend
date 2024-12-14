import TITLES from "~/constants/writeOption";
import { WriteDropdownButtonSelect } from "./WriteDropDownButtonStyles";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WriteDropdownButton = ({ value, onChange }: Props) => {
  const userType = localStorage.getItem("userType");
  const accessibleTitles = Object.entries(TITLES).filter(([title, [_, koreanTitle]]) => {
    if (userType === "external") {
      return ["guest_board", "media"].includes(title);
    }
    return true;
  });

  return (
    <WriteDropdownButtonSelect value={value} onChange={onChange}>
      {accessibleTitles.map(([title, [_, koreanTitle]]) => (
        <option key={title} value={title}>
          {koreanTitle}
        </option>
      ))}
    </WriteDropdownButtonSelect>
  );
};

export default WriteDropdownButton;
