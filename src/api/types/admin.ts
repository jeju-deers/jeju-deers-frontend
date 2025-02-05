export interface PutEditAccount {
  userId: string;
  belong: string;
  userType: string;
  permission: string;
  name: string;
  nickname?: string;
  email: string;
  school: string;
  studentId: string;
  positions: string[];
}
