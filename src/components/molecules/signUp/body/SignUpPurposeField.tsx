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
  onClick?: (element: any) => void;
}

const SignUpPurposeField = ({ selectedOption, onClick }: Props) => {
  return (
    <SignUpPurposeFieldBox>
      <SignUpPurposeLabelBox>
        <EssentialMark />
        <ItemLabel id="signUpPurpose" text="가입 목적" />
      </SignUpPurposeLabelBox>
      <SignUpPurposeRadioBox>
        <ItemRadio
          radioTitle="signUpPurpose"
          id="roster"
          text="YB / OB 선수"
          checked={selectedOption === "roster"}
          onClick={onClick}
        />
        <ItemRadio
          radioTitle="signUpPurpose"
          id="coachesStaff"
          text="코치 및 스탭"
          checked={selectedOption === "coachesStaff"}
          onClick={onClick}
        />
        <ItemRadio
          radioTitle="signUpPurpose"
          id="outsider"
          text="외부인"
          checked={selectedOption === "outsider"}
          onClick={onClick}
        />
      </SignUpPurposeRadioBox>
    </SignUpPurposeFieldBox>
  );
};

export default SignUpPurposeField;
