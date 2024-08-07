import { DropdownButtonSelect } from "./DropDownButtonStyles";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownButton = ({ value, onChange }: Props) => (
  <DropdownButtonSelect value={value} onChange={onChange}>
    <option value="title">제목</option>
    <option value="titleAndBody">제목+본문</option>
    <option value="name">작성자</option>
  </DropdownButtonSelect>
);

export default DropdownButton;