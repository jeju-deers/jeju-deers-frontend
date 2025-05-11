import { ChangeEvent, useState } from "react";

const useEditUserAccount = (userInformation: any) => {
  const [formData, setFormData] = useState({
    adminEditAccountUserType: userInformation.userType,
    adminEditAccountUserId: userInformation.userId,
    adminEditAccountName: userInformation.name,
    adminEditAccountNickname: userInformation.nickname,
    adminEditAccountEmail: userInformation.email,
    adminEditAccountSchool: userInformation.school,
    adminEditAccountStudentId: userInformation.studentId,
    adminEditAccountPositions: userInformation.positions,
    adminEditAccountInChange: userInformation.inChange,
    adminEditAccountBelong: userInformation.belong,
    adminEditAccountRole: userInformation.role,
    adminEditAccountResponsibility: userInformation.responsibility,
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

export default useEditUserAccount;
