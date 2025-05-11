export interface UserTypeData {
  korean: string;
  english: string;
}

const USER_TYPE_DATA: UserTypeData[] = [
  {
    korean: "선수",
    english: "player",
  },
  {
    korean: "코치",
    english: "coach",
  },
  {
    korean: "스태프",
    english: "staff",
  },
  {
    korean: "외부인",
    english: "external",
  },
  {
    korean: "전체",
    english: "all",
  },
];

export default USER_TYPE_DATA;
