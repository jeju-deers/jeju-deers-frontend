import { useState } from "react";
import {
  DropdownBox,
  DropdownButton,
  DropdownLabel,
  DropdownOptionLi,
  DropdownOptionsUl,
  TextSpan,
} from "./DropdownStyles";
import dropdownDownArrowImage from "~/assets/images/dropdown_down_arrow.svg";
import dropdownUpArrowImage from "~/assets/images/dropdown_up_arrow.svg";

interface Props {
  text: string;
  options: string[];
  onOptionSelected: (value: string) => void;
}

const Dropdown = ({ text, options, onOptionSelected }: Props) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const [selectedOption, setSelectedOption] = useState(text);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onOptionSelected(option);
    setDropdownView(false);
  };

  return (
    <DropdownBox>
      <DropdownLabel onClick={handleClickContainer}>
        <DropdownButton>
          <TextSpan>{selectedOption}</TextSpan>
          {isDropdownView ? (
            <img src={dropdownUpArrowImage} />
          ) : (
            <img src={dropdownDownArrowImage} />
          )}
        </DropdownButton>
      </DropdownLabel>
      {isDropdownView && (
        <DropdownOptionsUl>
          {options.map((option) => (
            <DropdownOptionLi onClick={() => handleSelectOption(option)}>{option}</DropdownOptionLi>
          ))}
        </DropdownOptionsUl>
      )}
    </DropdownBox>
  );
};

export default Dropdown;
