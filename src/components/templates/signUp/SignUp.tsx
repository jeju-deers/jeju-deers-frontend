import { ChangeEvent, FormEvent, useState } from "react";
import SubmitButton from "~/components/atoms/signUp/body/SubmitButton";
import PrivacyPolicyField from "~/components/molecules/signUp/body/PrivacyPolicyField";
import SignUpPurposeField from "~/components/molecules/signUp/body/SignUpPurposeField";
import SubHeader from "~/components/molecules/signUp/subHeader/SubHeader";
import BasicItemsInputField from "~/components/organisms/signUp/body/BasicItemsInputField";
import CoachItemsInputField from "~/components/organisms/signUp/body/CoachItemsInputField";
import PlayerItemsInputField from "~/components/organisms/signUp/body/PlayerItemsInputField";
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
import usePostPlayerSignUp from "~/hooks/signUp/usePostPlayerSignUp";
import usePostCoachSignUp from "~/hooks/signUp/usePostSigCoachnUp";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("player");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedId = event.target.id;
    setSelectedOption(selectedId);
  };

  const getOptionInputField = () => {
    if (selectedOption === "player") {
      return (
        <PlayerItemsInputField
          onChangeInputSchool={handleChangeInputSchool}
          onChangeInputStudentId={handleChangeInputStudentId}
          onChangeInputPositions={handleChangeInputPositions}
          onChangeInputBackNumber={handleChangeInputBackNumber}
        />
      );
    }
    if (selectedOption === "coach") {
      return (
        <CoachItemsInputField
          onChangeInputSchool={handleChangeInputSchool}
          onChangeInputStudentId={handleChangeInputStudentId}
          onChangeInputPositions={handleChangeInputPositions}
        />
      );
    }
    if (selectedOption === "external") {
      return <></>;
    }
  };

  const [inputSchoolValue, setInputSchoolValue] = useState("");
  const [inputStudentIdValue, setInputStudentIdValue] = useState("");
  const [inputPositionsValue, setInputPositionsValue] = useState("");
  const [inputBackNumberValue, setInputBackNumberValue] = useState("");

  const handleChangeInputSchool = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSchoolValue(event.target.value);
  };

  const handleChangeInputStudentId = (event: ChangeEvent<HTMLInputElement>) => {
    setInputStudentIdValue(event.target.value);
  };

  const handleChangeInputPositions = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPositionsValue(event.target.value);
  };

  const handleChangeInputBackNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setInputBackNumberValue(event.target.value);
  };

  const [inputIdValue, setInputIdValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputPasswordConfirmValue, setInputPasswordConfirmValue] = useState("");
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputNicknameValue, setInputNicknameValue] = useState<string | undefined>(undefined);
  const [inputEmailValue, setInputEmailValue] = useState("");

  const handleChangeInputId = (event: ChangeEvent<HTMLInputElement>) => {
    setInputIdValue(event.target.value);
  };

  const handleChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPasswordValue(event.target.value);
  };

  const handleChangeInputPasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPasswordConfirmValue(event.target.value);
  };

  const handleChangeInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(event.target.value);
  };

  const handleChangeInputNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNicknameValue(event.target.value === "" ? undefined : event.target.value);
  };

  const handleChangeInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(event.target.value);
  };

  const postPlayerSignUp = usePostPlayerSignUp();
  const postCoachSignUp = usePostCoachSignUp();
  const postExternalSignUp = usePostExternalSignUp();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const basicInputValues = {
      userType: selectedOption,
      userId: inputIdValue,
      password: inputPasswordValue,
      passwordConfirm: inputPasswordConfirmValue,
      name: inputNameValue,
      email: inputEmailValue,
      ...(inputNicknameValue !== undefined && { nickname: inputNicknameValue }),
    };

    if (selectedOption === "player") {
      postPlayerSignUp.mutate({
        ...basicInputValues,
        school: inputSchoolValue,
        studentId: inputStudentIdValue,
        positions: inputPositionsValue,
        backNumber: inputBackNumberValue,
      });
    }

    if (selectedOption === "coach") {
      postCoachSignUp.mutate({
        ...basicInputValues,
        school: inputSchoolValue,
        studentId: inputStudentIdValue,
        positions: inputPositionsValue,
      });
    }

    if (selectedOption === "external") {
      postExternalSignUp.mutate(basicInputValues);
    }
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
              onChangeInputId={handleChangeInputId}
              onChangeInputPassword={handleChangeInputPassword}
              onChangeInputPasswordConfirm={handleChangeInputPasswordConfirm}
              onChangeInputName={handleChangeInputName}
              onChangeInputNickname={handleChangeInputNickname}
              onChangeInputEmail={handleChangeInputEmail}
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
