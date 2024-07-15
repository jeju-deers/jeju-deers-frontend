import { instance } from ".";

interface PostSignUpParams {
  //   userType: "external" | "player" | "coach";
  userType: string;
  userId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname?: string;
  email: string;
  school?: string;
  studentId?: string;
  positions?: string;
  backNumber?: string;
}

export const postSignUp = ({
  userType,
  userId,
  password,
  passwordConfirm,
  name,
  nickname,
  email,
  school,
  studentId,
  positions,
  backNumber,
}: PostSignUpParams) => {
  return instance.post("/signup", {
    userType,
    userId,
    password,
    passwordConfirm,
    name,
    nickname,
    email,
    school,
    studentId,
    positions,
    backNumber,
  });
};

interface PostLoginParams {
  userId: string; // TODO: [2024-07-16] api 문서에 username 데이터를 전송한다고 표시되어있어 확인이 필요합니다.
  password: string;
}

export const postLogin = ({ userId, password }: PostLoginParams) => {
  return instance.post("/login", {
    userId,
    password,
  });
};
