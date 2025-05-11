import { MouseEvent, useState } from "react";
import {
  DropdownBox,
  DropdownButton,
  DropdownLabel,
  DropdownOptionLi,
  DropdownOptionsUl,
  SelectedOptionTextSpan,
} from "./DropdownStyles";
import dropdownDownArrowImage from "~/assets/images/dropdown_down_arrow.svg";
import dropdownUpArrowImage from "~/assets/images/dropdown_up_arrow.svg";
import { UserTypeData } from "~/constants/userTypeData";

interface Props {
  id: string;
  text: string;
  options: UserTypeData[] | string[];
  onChangeSelect: (id: string, value: string) => void;
}

const Dropdown = ({ id, text = "전체", options, onChangeSelect }: Props) => {
  const [isDropdownView, setIsDropdownView] = useState(false);
  const [selectedOption, setSelectedOption] = useState(text);

  const handleClickContainer = (event: MouseEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDropdownView(!isDropdownView);
  };

  const handleSelectOption = (id: string, koreanValue: string, englishValue: string) => {
    setSelectedOption(koreanValue);
    onChangeSelect(id, englishValue);
    setIsDropdownView(false);
  };

  return (
    <DropdownBox>
      <DropdownLabel onClick={handleClickContainer}>
        <DropdownButton>
          <SelectedOptionTextSpan>{selectedOption}</SelectedOptionTextSpan>
          {isDropdownView ? (
            <img src={dropdownUpArrowImage} />
          ) : (
            <img src={dropdownDownArrowImage} />
          )}
        </DropdownButton>
      </DropdownLabel>
      {isDropdownView && (
        <DropdownOptionsUl>
          {options.map((option, index) => (
            <DropdownOptionLi
              key={`${index}-${option}`}
              onClick={() =>
                handleSelectOption(
                  id,
                  typeof option === "string" ? option : option.korean,
                  typeof option === "string" ? option : option.english,
                )
              }>
              {typeof option === "string" ? option : option.korean}
            </DropdownOptionLi>
          ))}
        </DropdownOptionsUl>
      )}
    </DropdownBox>
  );
};

export default Dropdown;
