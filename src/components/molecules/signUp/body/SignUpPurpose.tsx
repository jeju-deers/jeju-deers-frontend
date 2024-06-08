import ItemLabel from "~/components/atoms/signUp/body/ItemLabel";
import {
  SignUpPurposeBox,
  SignUpPurposeLabelBox,
  SignUpPurposeRadioBox,
} from "./SignUpPurposeStyles";
import EssentialMark from "~/components/atoms/signUp/body/EssentialMark";
import ItemRadio from "~/components/atoms/signUp/body/ItemRadio";

const SignUpPurpose = () => {
  return (
    <SignUpPurposeBox>
      <SignUpPurposeLabelBox>
        <EssentialMark />
        <ItemLabel id="signUpPurpose" text="가입 목적" />
      </SignUpPurposeLabelBox>
      <SignUpPurposeRadioBox>
        <ItemRadio radioTitle="signUpPurpose" id="roaster" text="YB / OB 선수" checked />
        <ItemRadio radioTitle="signUpPurpose" id="coachesStaff" text="코치 및 스탭" />
        <ItemRadio radioTitle="signUpPurpose" id="outsider" text="외부인" />
      </SignUpPurposeRadioBox>
    </SignUpPurposeBox>
  );
};

export default SignUpPurpose;
