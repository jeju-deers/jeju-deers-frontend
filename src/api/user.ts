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
  userId: string;
  password: string;
}

export const postLogin = ({ userId, password }: PostLoginParams) => {
  return instance.post("/login", {
    userId,
    password,
  });
};
