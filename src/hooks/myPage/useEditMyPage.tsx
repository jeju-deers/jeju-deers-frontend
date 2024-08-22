import { ChangeEvent, useState } from "react";

const useEditMyPage = (temporaryData: any) => {
  const [formData, setFormData] = useState({
    inputId: temporaryData.userId,
    inputPassword: "",
    inputPasswordConfirm: "",
    inputName: temporaryData.name,
    inputNickname: temporaryData.nickname,
    inputBirth: temporaryData.birth,
    inputEmail: temporaryData.email,
    inputSchool: temporaryData.school,
    inputStudentId: temporaryData.studentId,
    inputPositions: temporaryData.positions,
    inputBackNumber: temporaryData.backNumber,
    inputBelong: temporaryData.belong,
    inputJoinYear: temporaryData.joinYear,
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

export default useEditMyPage;
