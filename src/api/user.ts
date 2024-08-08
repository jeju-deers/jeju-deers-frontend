import { instance } from ".";

interface PostSignUpProps {
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
}: PostSignUpProps) => {
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

interface PostLoginProps {
  userId: string;
  password: string;
}

export const postLogin = ({ userId, password }: PostLoginProps) => {
  return instance.post("/login", {
    userId,
    password,
  });
};
