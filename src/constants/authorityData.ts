export interface AuthorityData {
  korean: string;
  english: string;
}

const AUTHORITY_DATA: AuthorityData[] = [
  {
    korean: "일반 회원",
    english: "normal",
  },
  {
    korean: "관리자",
    english: "admin",
  },
  {
    korean: "외부 회원",
    english: "guest",
  },
];

export default AUTHORITY_DATA;
