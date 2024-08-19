import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { PlayerItemsInputFieldBox } from "./PlayerItemsInputFieldStyles";

interface Props {
  temporaryUserInformation: {
    school?: string;
    studentId?: string;
    positions?: string;
    backNumber?: string;
    belong?: string;
    joinYear?: string;
  };
}

const PlayerItemsInputField = ({ temporaryUserInformation }: Props) => {
  const temporarySchool = temporaryUserInformation.school;
  const temporaryStudentId = temporaryUserInformation.studentId;
  const temporaryPositions = temporaryUserInformation.positions;
  const temporaryBackNumber = temporaryUserInformation.backNumber;
  const temporaryBelong = temporaryUserInformation.belong;
  const temporaryJoinYear = temporaryUserInformation.joinYear;

  return (
    <PlayerItemsInputFieldBox>
      <ItemInputField
        id="playerSchoolFrom"
        text="출신학교"
        value={temporarySchool}
        required={false}
      />
      <ItemInputField
        id="playerStudentId"
        text="학번"
        value={temporaryStudentId}
        required={false}
      />
      <ItemInputField
        id="playerPosition"
        text="포지션"
        value={temporaryPositions}
        required={false}
        condition="(여러개 입력 가능)"
      />
      <ItemInputField
        id="playerBackNumber"
        text="백넘버"
        value={temporaryBackNumber}
        required={false}
      />
      <ItemInputField id="playerBelong" text="소속" value={temporaryBelong} required={false} />
      <ItemInputField
        id="playerJoinYear"
        text="입단년도"
        value={temporaryJoinYear}
        required={false}
      />
    </PlayerItemsInputFieldBox>
  );
};

export default PlayerItemsInputField;
