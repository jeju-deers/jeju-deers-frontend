import ItemLabel from "~/components/atoms/signUp/body/ItemLabel";
import {
  SignUpPurposeFieldBox,
  SignUpPurposeLabelBox,
  SignUpPurposeRadioBox,
} from "./SignUpPurposeFieldStyles";
import EssentialMark from "~/components/atoms/signUp/body/EssentialMark";
import ItemRadio from "~/components/atoms/signUp/body/ItemRadio";

interface Props {
  selectedOption: string;
  onChange?: (element: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpPurposeField = ({ selectedOption, onChange }: Props) => {
  return (
    <SignUpPurposeFieldBox>
      <SignUpPurposeLabelBox>
        <EssentialMark />
        <ItemLabel text="가입 목적" />
      </SignUpPurposeLabelBox>
      <SignUpPurposeRadioBox>
        <ItemRadio
          radioTitle="signUpPurpose"
          id="roster"
          text="YB / OB 선수"
          checked={selectedOption === "roster"}
          onChange={onChange}
        />
        <ItemRadio
          radioTitle="signUpPurpose"
          id="coachesStaff"
          text="코치 및 스탭"
          checked={selectedOption === "coachesStaff"}
          onChange={onChange}
        />
        <ItemRadio
          radioTitle="signUpPurpose"
          id="outsider"
          text="외부인"
          checked={selectedOption === "outsider"}
          onChange={onChange}
        />
      </SignUpPurposeRadioBox>
    </SignUpPurposeFieldBox>
  );
};

export default SignUpPurposeField;
