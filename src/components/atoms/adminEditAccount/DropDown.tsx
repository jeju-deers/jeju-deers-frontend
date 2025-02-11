import { MouseEvent, useState } from "react";
import {
  DropDownBox,
  DropDownButton,
  DropDownLabel,
  DropDownOptionLi,
  DropDownOptionsUl,
  TextSpan,
} from "./DropDownStyles";
import dropdownDownArrowImage from "~/assets/images/dropdown_down_arrow.svg";
import dropdownUpArrowImage from "~/assets/images/dropdown_up_arrow.svg";

interface Props {
  text: string;
  options: string[];
  onOptionSelected: (value: string) => void;
}

const DropDown = ({ text = "전체", options, onOptionSelected }: Props) => {
  const [isDropdownView, setDropDownView] = useState(false);
  const [selectedOption, setSelectedOption] = useState(text);

  const handleClickContainer = (event: MouseEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDropDownView(!isDropdownView);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onOptionSelected(option);
    setDropDownView(false);
  };

  return (
    <DropDownBox>
      <DropDownLabel onClick={handleClickContainer}>
        <DropDownButton>
          <TextSpan>{selectedOption}</TextSpan>
          {isDropdownView ? (
            <img src={dropdownUpArrowImage} />
          ) : (
            <img src={dropdownDownArrowImage} />
          )}
        </DropDownButton>
      </DropDownLabel>
      {isDropdownView && (
        <DropDownOptionsUl>
          {options.map((option, index) => (
            <DropDownOptionLi key={`${index}-${option}`} onClick={() => handleSelectOption(option)}>
              {option}
            </DropDownOptionLi>
          ))}
        </DropDownOptionsUl>
      )}
    </DropDownBox>
  );
};

export default DropDown;
