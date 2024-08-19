import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { PlayerItemsInputFieldBox } from "./PlayerItemsInputFieldStyles";

const PlayerItemsInputField = () => {
  return (
    <PlayerItemsInputFieldBox>
      <ItemInputField id="playerSchoolFrom" text="출신학교" required={false} />
      <ItemInputField id="playerStudentId" text="학번" required={false} />
      <ItemInputField
        id="playerPosition"
        text="포지션"
        required={false}
        condition="(여러개 입력 가능)"
      />
      <ItemInputField id="playerBackNumber" text="백넘버" required={false} />
    </PlayerItemsInputFieldBox>
  );
};

export default PlayerItemsInputField;
