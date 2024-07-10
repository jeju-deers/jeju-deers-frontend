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
import usePostCoachSignUp from "~/hooks/signUp/usePostCoachSignUp";

const SignUp = () => {
  const postPlayerSignUp = usePostPlayerSignUp();
  const postCoachSignUp = usePostCoachSignUp();
  const postExternalSignUp = usePostExternalSignUp();

  const [selectedOption, setSelectedOption] = useState("player");

  const [inputSchool, setInputSchool] = useState("");
  const [inputStudentId, setInputStudentId] = useState("");
  const [inputPositions, setInputPositions] = useState("");
  const [inputBackNumber, setInputBackNumber] = useState("");

  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputNickname, setInputNickname] = useState<string | undefined>(undefined);
  const [inputEmail, setInputEmail] = useState("");

  const handleChangeSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedId = event.target.id;
    setSelectedOption(selectedId);
  };

  const handleChangeInputSchool = (event: ChangeEvent<HTMLInputElement>) => {
    const inputSchoolValue = event.target.value;
    setInputSchool(inputSchoolValue);
  };
  const handleChangeInputStudentId = (event: ChangeEvent<HTMLInputElement>) => {
    const inputStudentId = event.target.value;
    setInputStudentId(inputStudentId);
  };
  const handleChangeInputPositions = (event: ChangeEvent<HTMLInputElement>) => {
    const inputPositionsValue = event.target.value;
    setInputPositions(inputPositionsValue);
  };
  const handleChangeInputBackNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const inputBackNumberValue = event.target.value;
    setInputBackNumber(inputBackNumberValue);
  };

  const handleChangeInputId = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIdValue = event.target.value;
    setInputId(inputIdValue);
  };
  const handleChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const inputPassword = event.target.value;
    setInputPassword(inputPassword);
  };
  const handleChangeInputPasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPasswordConfirm(event.target.value);
  };
  const handleChangeInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };
  const handleChangeInputNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNickname(event.target.value === "" ? undefined : event.target.value);
  };
  const handleChangeInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const basicInputValues = {
      userType: selectedOption,
      userId: inputId,
      password: inputPassword,
      passwordConfirm: inputPasswordConfirm,
      name: inputName,
      email: inputEmail,
      ...(inputNickname !== undefined && { nickname: inputNickname }),
    };

    if (selectedOption === "player") {
      postPlayerSignUp.mutate({
        ...basicInputValues,
        school: inputSchool,
        studentId: inputStudentId,
        positions: inputPositions,
        backNumber: inputBackNumber,
      });
    }

    if (selectedOption === "coach") {
      postCoachSignUp.mutate({
        ...basicInputValues,
        school: inputSchool,
        studentId: inputStudentId,
        positions: inputPositions,
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
            <SignUpPurposeField selectedOption={selectedOption} onChange={handleChangeSelected} />
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
