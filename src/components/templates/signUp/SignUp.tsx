import { ChangeEvent, FormEvent, useState } from "react";
import SubmitButton from "~/components/atoms/signUp/body/SubmitButton";
import PrivacyPolicyField from "~/components/molecules/signUp/body/PrivacyPolicyField";
import SignUpPurposeField from "~/components/molecules/signUp/body/SignUpPurposeField";
import SubHeader from "~/components/molecules/signUp/subHeader/SubHeader";
import BasicItemsInputField from "~/components/organisms/signUp/body/BasicItemsInputField";
import CoachesStaffItemsInputField from "~/components/organisms/signUp/body/CoachesStaffItemsInputField";
import RosterItemsInputField from "~/components/organisms/signUp/body/RosterItemsInputField";
import PrimaryHeader from "~/components/organisms/signUp/primaryHeader/PrimaryHeader";
import {
  BasicItemsInputFieldWrap,
  OptionItemsInputFieldWrap,
  PrimaryHeaderWrap,
  PrivacyPolicyFieldWrap,
  SignUpForm,
  SignUpLayout,
  SignUpPurposeFieldWrap,
  SubHeaderWrap,
  WholeSignUpLayout,
} from "~/components/templates/signUp/SignUpStyles";
import usePostExternalSignUp from "~/hooks/signUp/usePostExternalSignUp";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("player");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = event.target.id;
    setSelectedOption(selectedId);
  };

  const getOptionInputField = () => {
    if (selectedOption === "player") {
      return <RosterItemsInputField />;
    }
    if (selectedOption === "coach") {
      return <CoachesStaffItemsInputField />;
    }
    if (selectedOption === "external") {
      return <></>;
    }
  };

  const [inputIdValue, setInputIdValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputPasswordConfirmValue, setInputPasswordConfirmValue] = useState("");
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputNickNameValue, setInputNickNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");

  const onChangeInputId = (event: ChangeEvent<HTMLInputElement>) => {
    setInputIdValue(event.target.value);
    console.log(event.target.value);
  };

  const onChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPasswordValue(event.target.value);
    console.log(event.target.value);
  };

  const onChangeInputPasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPasswordConfirmValue(event.target.value);
  };

  const onChangeInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(event.target.value);
  };

  const onChangeInputNickName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNickNameValue(event.target.value);
  };

  const onChangeInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(event.target.value);
  };

  const postExternalSignUp = usePostExternalSignUp();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postExternalSignUp.mutate({
      userType: selectedOption,
      userId: inputIdValue,
      password: inputPasswordValue,
      passwordConfirm: inputPasswordConfirmValue,
      name: inputNameValue,
      nickname: inputNickNameValue,
      email: inputEmailValue,
    });
  };

  return (
    <WholeSignUpLayout>
      <PrimaryHeaderWrap>
        <PrimaryHeader />
      </PrimaryHeaderWrap>
      <SignUpLayout>
        <SubHeaderWrap>
          <SubHeader />
        </SubHeaderWrap>
        <SignUpForm id="signUpSubmit" onSubmit={(event) => handleSubmit(event)}>
          <SignUpPurposeFieldWrap>
            <SignUpPurposeField selectedOption={selectedOption} onChange={handleChange} />
          </SignUpPurposeFieldWrap>
          <BasicItemsInputFieldWrap>
            <BasicItemsInputField
              onChangeInputId={onChangeInputId}
              onChangeInputPassword={onChangeInputPassword}
              onChangeInputPasswordConfirm={onChangeInputPasswordConfirm}
              onChangeInputName={onChangeInputName}
              onChangeInputNickName={onChangeInputNickName}
              onChangeInputEmail={onChangeInputEmail}
            />
          </BasicItemsInputFieldWrap>
          <OptionItemsInputFieldWrap>{getOptionInputField()}</OptionItemsInputFieldWrap>
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
