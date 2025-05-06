import { useState } from "react";
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
import { UserTypeData } from "~/constants/userTypeData";

interface Props {
  text: string;
  options: UserTypeData[] | string[];
  onOptionSelected: (value: string) => void;
}

const DropDown = ({ text, options, onOptionSelected }: Props) => {
  const [isDropdownView, setDropDownView] = useState(false);
  const [selectedOption, setSelectedOption] = useState(text);

  const handleClickContainer = () => {
    setDropDownView(!isDropdownView);
  };

  const handleSelectOption = (koreanValue: string, englishValue: string) => {
    setSelectedOption(koreanValue);
    onOptionSelected(englishValue);
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
          {options.map((option) => (
            <DropDownOptionLi
              onClick={() =>
                handleSelectOption(
                  typeof option === "string" ? option : option.korean,
                  typeof option === "string" ? option : option.english,
                )
              }>
              {typeof option === "string" ? option : option.korean}
            </DropDownOptionLi>
          ))}
        </DropDownOptionsUl>
      )}
    </DropDownBox>
  );
};

export default DropDown;
