import { useState } from "react";
import SubmitButton from "~/components/atoms/signUp/body/SubmitButton";
import PrivacyPolicyField from "~/components/molecules/signUp/body/PrivacyPolicyField";
import SignUpPurposeField from "~/components/molecules/signUp/body/SignUpPurposeField";
import BasicItemsInputField from "~/components/organisms/signUp/body/BasicItemsInputField";
import CoachesStaffItemsInputField from "~/components/organisms/signUp/body/CoachesStaffItemsInputField";
import RosterItemsInputField from "~/components/organisms/signUp/body/RosterItemsInputField";
import Header from "~/components/organisms/signUp/header/Header";
import {
  PrivacyPolicyFieldWrap,
  SignUpForm,
  SignUpLayout,
  SignUpPurposeFieldWrap,
} from "~/components/templates/signUp/SignUpStyles";

const SignUp = () => {
  const [optionInputField, setOptionInputField] = useState(<RosterItemsInputField />);
  const handleChange = (element: any) => {
    if (element.target.id === "roster") {
      setOptionInputField(<RosterItemsInputField />);
    } else if (element.target.id === "coachesStaff") {
      setOptionInputField(<CoachesStaffItemsInputField />);
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
        <BasicItemsInputField />
        <>{optionInputField}</>
        <PrivacyPolicyFieldWrap>
          <PrivacyPolicyField />
        </PrivacyPolicyFieldWrap>
        <SubmitButton text="회원가입" formId="signUpSubmit" />
      </SignUpForm>
    </SignUpLayout>
  );
};

export default SignUp;
