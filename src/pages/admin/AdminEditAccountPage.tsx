import { useParams } from "react-router-dom";
import ErrorMessage from "~/common/components/atom/ErrorMessage";
import AdminEditAccount from "~/components/templates/admin/AdminEditAccount";

const AdminEditAccountPage = () => {
  const { id } = useParams();

  if (!id) {
    return <ErrorMessage text="정보 수정을 요청한 사용자를 찾지 못했습니다." />;
  }

  return <AdminEditAccount userId={id} />;
};

export default AdminEditAccountPage;
