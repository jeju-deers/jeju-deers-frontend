import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { PlayerItemsInputFieldBox } from "./PlayerItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
const PlayerItemsInputField = ({ onChangeInput }: Props) => {
  return (
    <PlayerItemsInputFieldBox>
      <ItemInputField id="inputSchool" text="출신학교" required onChange={onChangeInput} />
      <ItemInputField id="inputStudentId" text="학번" required onChange={onChangeInput} />
      <ItemInputField
        id="inputPositions"
        text="포지션"
        required
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
      <ItemInputField id="inputBackNumber" text="백넘버" required onChange={onChangeInput} />
    </PlayerItemsInputFieldBox>
  );
};

export default PlayerItemsInputField;
