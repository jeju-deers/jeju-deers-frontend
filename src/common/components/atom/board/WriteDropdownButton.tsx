import WRITEOPTIONS from "~/constants/writeOption";
import { WriteDropdownButtonSelect } from "./WriteDropDownButtonStyles";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WriteDropdownButton = ({ value, onChange }: Props) => {
  const userType = localStorage.getItem("userType");
  const accessibleTitles = Object.entries(WRITEOPTIONS).filter(([title, [_]]) => {
    if (userType === "external") {
      return ["guest_board"].includes(title);
    }
    if (userType === "player") {
      return [
        "news",
        "workout_schedules",
        "team_board",
        "playbook",
        "membership_fee",
        "guest_board",
        "media",
        "support",
      ].includes(title);
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
