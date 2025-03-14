import { ChangeEvent, FormEvent } from "react";
import SubmitButton from "~/components/atoms/signUp/body/SubmitButton";
import PrivacyPolicyField from "~/components/molecules/signUp/body/PrivacyPolicyField";
import SignUpPurposeField from "~/components/molecules/signUp/body/SignUpPurposeField";
import SubHeader from "~/components/molecules/signUp/subHeader/SubHeader";
import BasicItemsInputField from "~/components/organisms/signUp/body/BasicItemsInputField";
import CoachItemsInputField from "~/components/organisms/signUp/body/CoachItemsInputField";
import PlayerItemsInputField from "~/components/organisms/signUp/body/PlayerItemsInputField";
import {
  BasicItemsInputFieldWrap,
  OptionItemsInputFieldWrap,
  PrivacyPolicyFieldWrap,
  SignUpForm,
  SignUpLayout,
  SignUpPurposeFieldWrap,
  SubHeaderWrap,
  WholeSignUpLayout,
} from "~/components/templates/signUp/SignUpStyles";

interface Props {
  selectedOption: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSelected: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SignUp = ({ selectedOption, onChangeInput, onChangeSelected, onSubmit }: Props) => {
  const getOptionInputField = () => {
    if (selectedOption === "player") {
      return <PlayerItemsInputField onChangeInput={onChangeInput} />;
    }
    if (selectedOption === "coach") {
      return <CoachItemsInputField onChangeInput={onChangeInput} />;
    }
    if (selectedOption === "external") {
      return <></>;
    }
  };

  return (
    // TODO: [2024-08-02] WholeSignUpLayout 제거 및 outlet subheader을 이용하여 병합
    <WholeSignUpLayout>
      <SignUpLayout>
        <SubHeaderWrap>
          <SubHeader />
        </SubHeaderWrap>
        <SignUpForm id="signUpSubmit" onSubmit={onSubmit}>
          <SignUpPurposeFieldWrap>
            <SignUpPurposeField selectedOption={selectedOption} onChange={onChangeSelected} />
          </SignUpPurposeFieldWrap>
          <BasicItemsInputFieldWrap>
            <BasicItemsInputField onChangeInput={onChangeInput} />
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
