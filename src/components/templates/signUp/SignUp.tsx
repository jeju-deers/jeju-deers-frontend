import SubmitButton from "~/components/atoms/signUp/body/SubmitButton";
import PrivacyPolicyField from "~/components/molecules/signUp/body/PrivacyPolicyField";
import SignUpPurposeField from "~/components/molecules/signUp/body/SignUpPurposeField";
import BasicItemInputField from "~/components/organisms/signUp/body/BasicItemInputField";
import CoachesStaffItemInputField from "~/components/organisms/signUp/body/CoachesStaffItemInputField";
import RosterItemInputField from "~/components/organisms/signUp/body/RosterItemInputField";
import Header from "~/components/organisms/signUp/header/Header";
import {
  BasicItemInputFieldWrap,
  OptionItemInputFieldWrap,
  PrivacyPolicyFieldWrap,
  SignUpForm,
  SignUpLayout,
  SignUpPurposeFieldWrap,
  SubmitButtonWrap,
} from "~/components/templates/signUp/SignUpStyles";

const SignUp = () => {
  return (
    <SignUpLayout>
      <Header />
      <SignUpForm id="signUpSubmit">
        <SignUpPurposeFieldWrap>
          <SignUpPurposeField />
        </SignUpPurposeFieldWrap>
        <BasicItemInputFieldWrap>
          <BasicItemInputField />
        </BasicItemInputFieldWrap>
        <OptionItemInputFieldWrap>
          <RosterItemInputField />
        </OptionItemInputFieldWrap>
        <PrivacyPolicyFieldWrap>
          <PrivacyPolicyField />
        </PrivacyPolicyFieldWrap>
        <SubmitButtonWrap>
          <SubmitButton text="회원가입" formId="signUpSubmit" />
        </SubmitButtonWrap>
      </SignUpForm>
    </SignUpLayout>
  );
};

export default SignUp;
