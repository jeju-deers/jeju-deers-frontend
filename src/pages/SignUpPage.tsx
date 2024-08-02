import { ChangeEvent, FormEvent, useState } from "react";
import SignUp from "~/components/templates/signUp/SignUp";
import usePostCoachSignUp from "~/hooks/signUp/mutate/usePostCoachSignUp";
import usePostExternalSignUp from "~/hooks/signUp/mutate/usePostExternalSignUp";
import usePostPlayerSignUp from "~/hooks/signUp/mutate/usePostPlayerSignUp";
import useSignUpForm from "~/hooks/signUp/useSignUpForm";

const SignUpPage = () => {
  const postPlayerSignUp = usePostPlayerSignUp();
  const postCoachSignUp = usePostCoachSignUp();
  const postExternalSignUp = usePostExternalSignUp();

  const [selectedOption, setSelectedOption] = useState("player");

  const { formData, handleChangeInput } = useSignUpForm();

  const handleChangeSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedId = event.target.id;
    setSelectedOption(selectedId);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const basicInputValues = {
      userType: selectedOption,
      userId: formData.inputId,
      password: formData.inputPassword,
      passwordConfirm: formData.inputPasswordConfirm,
      name: formData.inputName,
      nickname: formData.inputNickname,
      email: formData.inputEmail,
    };

    if (selectedOption === "player") {
      postPlayerSignUp.mutate({
        ...basicInputValues,
        school: formData.inputSchool,
        studentId: formData.inputStudentId,
        positions: formData.inputPositions,
        backNumber: formData.inputBackNumber,
      });
    }

    if (selectedOption === "coach") {
      postCoachSignUp.mutate({
        ...basicInputValues,
        school: formData.inputSchool,
        studentId: formData.inputStudentId,
        positions: formData.inputPositions,
      });
    }

    if (selectedOption === "external") {
      postExternalSignUp.mutate(basicInputValues);
    }
  };

  return (
    <SignUp
      selectedOption={selectedOption}
      onChangeInput={handleChangeInput}
      onChangeSelected={handleChangeSelected}
      onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
    />
  );
};

export default SignUpPage;
