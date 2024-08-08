import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { PlayerItemsInputFieldBox } from "./PlayerItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
const PlayerItemsInputField = ({ onChangeInput }: Props) => {
  return (
    <PlayerItemsInputFieldBox>
      <ItemInputField
        id="inputSchool"
        text="출신학교"
        required
        pattern="^(?=.*[\uAC00-\uD7A3])[\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputStudentId"
        text="학번"
        required
        pattern="^(?=.*\d)[\d]{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPositions"
        text="포지션"
        required
        pattern="^(?=.*[A-Za-z])[A-Za-z]{2}$"
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputBackNumber"
        text="백넘버"
        required
        pattern="^(?=.*\d)[\d]{1,3}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputBirth"
        text="생년월일"
        required
        pattern="^\d{4}\.\d{2}\.\d{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputBelong"
        text="소속"
        required
        pattern="(?=.*[A-Za-z])[A-Za-z]{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputJoinYear"
        text="입단년도"
        required
        pattern="^(?=.*\d)[\d]{4}$"
        onChange={onChangeInput}
      />
    </PlayerItemsInputFieldBox>
  );
};

export default PlayerItemsInputField;
