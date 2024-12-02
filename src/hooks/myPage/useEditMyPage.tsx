import { ChangeEvent, useState } from "react";
import { GetUserInformationProps } from "~/api/types/users";

const useEditMyPage = ({ userInformation }: any) => {
  const [formData, setFormData] = useState({
    userType: userInformation.userType,
    inputId: userInformation.userId,
    inputPassword: userInformation.password || "",
    inputPasswordConfirm: userInformation.passwordConfirm || "",
    inputName: userInformation.name,
    inputNickname: userInformation.nickname,
    inputBirth: userInformation.birth,
    inputEmail: userInformation.email,
    inputSchool: userInformation.school,
    inputStudentId: userInformation.studentId,
    inputPositions: userInformation.positions,
    inputBackNumber: userInformation.backNumber,
    inputBelong: userInformation.belong,
    inputJoinYear: userInformation.joinYear,
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
