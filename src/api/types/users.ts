export interface GetUserInformationProps {
  userId: string;
  userType: string; // TODO: [2024-08-19] 단일 회원 조회 api의 반환값에 userType을 포함하도록 백엔드 측에 요청해야 합니다. (nickname, birth, joinYear, belong 값도 포함 요청 필요)
  name: string;
  email: string;
  school: string;
  studentId: string;
  positions: string[];
  backNumber: number;
}
