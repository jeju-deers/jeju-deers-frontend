interface Props {
  userId: string;
}

const AdminEditAccount = ({ userId }: Props) => {
  return <>사용자 Id: {userId}</>;
};

export default AdminEditAccount;
