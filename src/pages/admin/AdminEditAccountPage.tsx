import { useParams } from "react-router-dom";
import ErrorMessage from "~/common/components/atom/ErrorMessage";
import PendingMessage from "~/common/components/atom/PendingMessage";
import AdminEditAccount from "~/components/templates/admin/adminEditAccount/AdminEditAccount";
import useGetEditAccount from "~/hooks/admin/query/useGetEditAccount";

const AdminEditAccountPage = () => {
  const { id: userId } = useParams();

  if (!userId) {
    return <ErrorMessage text="정보 수정을 요청한 사용자를 찾지 못했습니다." />;
  }

  const { editAccountData, isLoading } = useGetEditAccount(userId);

  if (isLoading) {
    return <PendingMessage />;
  }

  const userInformation = editAccountData?.user;

  return <AdminEditAccount userInformation={userInformation} />;
};

export default AdminEditAccountPage;
