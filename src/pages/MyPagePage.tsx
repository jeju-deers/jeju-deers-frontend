import PendingMessage from "~/common/components/atom/PendingMessage";
import MyPage from "~/components/templates/myPage/MyPage";
import useUpdateUserInformation from "~/hooks/myPage/mutate/useUpdateUserInformation";
import useGetUserInformation from "~/hooks/myPage/query/useGetUserInformation";

const MyPagePage = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const { userInformation, isLoading } = useGetUserInformation(userId, token);
  const updateUserInformation = useUpdateUserInformation(userId, token);

  if (isLoading) {
    return <PendingMessage />;
  }

  return <MyPage userInformation={userInformation} updateUserInformation={updateUserInformation} />;
};

export default MyPagePage;
