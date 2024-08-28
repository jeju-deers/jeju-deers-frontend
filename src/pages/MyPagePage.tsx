import MyPage from "~/components/templates/myPage/MyPage";
import useUpdateUserInformation from "~/hooks/myPage/mutate/useUpdateUserInformation";
import useGetUserInformation from "~/hooks/myPage/query/useGetUserInformation";

const MyPagePage = () => {
  const token = localStorage.getItem("token");
  const userId = "player012";

  const { userInformation, isLoading } = useGetUserInformation(userId, token);
  const { mutate } = useUpdateUserInformation(userId, token);

  if (isLoading) {
    return <>...Loading</>;
  }

  return <MyPage userInformation={userInformation} mutate={mutate} />;
};

export default MyPagePage;
