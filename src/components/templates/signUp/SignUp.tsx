import { useState } from "react";
import SubmitButton from "~/components/atoms/signUp/body/SubmitButton";
import PrivacyPolicyField from "~/components/molecules/signUp/body/PrivacyPolicyField";
import SignUpPurposeField from "~/components/molecules/signUp/body/SignUpPurposeField";
import SubHeader from "~/components/molecules/signUp/header/SubHeader";
import BasicItemsInputField from "~/components/organisms/signUp/body/BasicItemsInputField";
import CoachesStaffItemsInputField from "~/components/organisms/signUp/body/CoachesStaffItemsInputField";
import RosterItemsInputField from "~/components/organisms/signUp/body/RosterItemsInputField";
import PrimaryHeaderContent from "~/components/organisms/signUp/header/PrimaryHeaderContent";
import {
  PrivacyPolicyFieldWrap,
  SignUpForm,
  SignUpLayout,
  SignUpPurposeFieldWrap,
  SubHeaderWrap,
  WholeSignUpLayout,
} from "~/components/templates/signUp/SignUpStyles";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("roster");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = event.target.id;
    setSelectedOption(selectedId);
  };

  const getOptionInputField = () => {
    if (selectedOption === "roster") {
      return <RosterItemsInputField />;
    }
    if (selectedOption === "coachesStaff") {
      return <CoachesStaffItemsInputField />;
    }
    if (selectedOption === "outsider") {
      return <></>;
    }
  };

  return (
    <WholeSignUpLayout>
      <PrimaryHeaderContent />
      <SignUpLayout>
        <SubHeaderWrap>
          <SubHeader />
        </SubHeaderWrap>
        <SignUpForm id="signUpSubmit">
          <SignUpPurposeFieldWrap>
            <SignUpPurposeField selectedOption={selectedOption} onChange={handleChange} />
          </SignUpPurposeFieldWrap>
          <BasicItemsInputField />
          <>{getOptionInputField()}</>
          <PrivacyPolicyFieldWrap>
            <PrivacyPolicyField />
          </PrivacyPolicyFieldWrap>
          <SubmitButton text="회원가입" formId="signUpSubmit" />
        </SignUpForm>
      </SignUpLayout>
    </WholeSignUpLayout>
  );
};

export default SignUp;
