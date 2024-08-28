import MyPage from "~/components/templates/myPage/MyPage";
import useGetUserInformation from "~/hooks/myPage/query/useGetUserInformation";

const MyPagePage = () => {
  const token = localStorage.getItem("token");
  const userId = "player012";

  const { userInformation, isLoading } = useGetUserInformation(userId, token);

  if (isLoading) {
    return <>...Loading</>;
  }

  return <MyPage userInformation={userInformation} />;
};

export default MyPagePage;
