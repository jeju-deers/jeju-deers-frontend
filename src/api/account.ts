import { instance } from ".";

interface PostSignUpProps {
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
  birth?: string;
  belong?: string;
  joinYear?: string;
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
  birth,
  belong,
  joinYear,
}: PostSignUpProps) => {
  return instance.post("/auth/signup", {
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
    birth,
    belong,
    joinYear,
  });
};

interface PostLoginProps {
  userId: string;
  password: string;
}

export const postLogin = ({ userId, password }: PostLoginProps) => {
  return instance.post("/auth/login", {
    userId,
    password,
  });
};
