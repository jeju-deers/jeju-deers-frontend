import { useState } from "react";
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
  const [optionInputField, setOptionInputField] = useState(<RosterItemInputField />);
  const handleChange = (element: any) => {
    if (element.target.id === "roster") {
      setOptionInputField(<RosterItemInputField />);
    } else if (element.target.id === "coachesStaff") {
      setOptionInputField(<CoachesStaffItemInputField />);
    } else if (element.target.id === "outsider") {
      setOptionInputField(<></>);
    }
  };
  return (
    <SignUpLayout>
      <Header />
      <SignUpForm id="signUpSubmit">
        <SignUpPurposeFieldWrap>
          <SignUpPurposeField onClick={handleChange} />
        </SignUpPurposeFieldWrap>
        <BasicItemInputFieldWrap>
          <BasicItemInputField />
        </BasicItemInputFieldWrap>
        <OptionItemInputFieldWrap>{optionInputField}</OptionItemInputFieldWrap>
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
