import { SignUpPurposeFieldBox, SignUpPurposeRadioBox } from "./SignUpPurposeFieldStyles";
import ItemRadio from "~/components/atoms/signUp/body/ItemRadio";
import ItemTitle from "~/components/atoms/signUp/body/ItemTitle";

interface Props {
  selectedOption: string;
  onChange?: (element: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpPurposeField = ({ selectedOption, onChange }: Props) => {
  return (
    <SignUpPurposeFieldBox>
      <ItemTitle text="가입 목적" required />
      <SignUpPurposeRadioBox>
        <ItemRadio
          radioTitle="signUpPurpose"
          id="player"
          text="YB / OB 선수"
          checked={selectedOption === "player"}
          onChange={onChange}
        />
        <ItemRadio
          radioTitle="signUpPurpose"
          id="coach"
          text="코치 및 스탭"
          checked={selectedOption === "coach"}
          onChange={onChange}
        />
        <ItemRadio
          radioTitle="signUpPurpose"
          id="external"
          text="외부인"
          checked={selectedOption === "external"}
          onChange={onChange}
        />
      </SignUpPurposeRadioBox>
    </SignUpPurposeFieldBox>
  );
};

export default SignUpPurposeField;
