import { ChangeEvent, useState } from "react";

const useSignUpForm = () => {
  const [formData, setFormData] = useState({
    inputId: "",
    inputPassword: "",
    inputPasswordConfirm: "",
    inputName: "",
    inputNickname: "",
    inputEmail: "",
    inputSchool: "",
    inputStudentId: "",
    inputPositions: "",
    inputBackNumber: "",
    inputBirth: "",
    inputBelong: "",
    inputJoinYear: "",
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  return {
    formData,
    handleChangeInput,
  };
};

export default useSignUpForm;
