export interface GetUserInformationProps {
  userInformation: {
    userType: string | "";
    userId: string;
    password: string | "";
    passwordConfirm: string | "";
    name: string;
    email: string;
    school: string;
    studentId: string;
    positions: string;
    backNumber: string;
    nickname: string | "";
    birth: string | "";
    belong: string | "";
    joinYear: string | "";
  };
}
