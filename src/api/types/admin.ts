export interface PutEditAccount {
  userId: string;
  belong: string;
  role: string;
  permission: string;
  name: string;
  nickname?: string;
  email: string;
  school: string;
  studentId: string;
  positions: string[];
}
