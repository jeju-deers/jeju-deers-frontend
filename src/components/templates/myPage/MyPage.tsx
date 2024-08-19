import {
  BasicItemsInputFieldWrap,
  FormActionButtonBox,
  MyPageForm,
  MyPageLayout,
  OptionItemsInputFieldWrap,
  SubHeaderWrap,
} from "./MyPageStyles";
import SubHeader from "~/components/molecules/myPage/subHeader/SubHeader";
import BasicItemsInputField from "~/components/organisms/myPage/BasicItemsInputField";
import PlayerItemsInputField from "~/components/organisms/myPage/PlayerItemsInputField";
import CoachItemsInputField from "~/components/organisms/myPage/CoachItemsInputField";
import SubmitButton from "~/components/atoms/myPage/body/SubmitButton";
import CancelButton from "~/components/atoms/myPage/body/CancelButton";
import { useGetUserInformation } from "~/hooks/myPage/query/useGetUserInformation";

const MyPage = () => {
  // TODO: [2024-08-19] 임시로 임의의 값을 넣었습니다.
  // 이후, userId 없이 token값을 헤더를 통해 서버 측에 전달하면, 로그인한 유저를 파악할 수 있는지 확인 후 수정이 필요합니다.
  const userId = "player07";
  const { userInformation } = useGetUserInformation(userId);

  // TODO: [2024-08-19] 단일 회원 조회의 응답 데이터에 userType을 포함해 달라는 요청이 필요합니다.
  const userType = userInformation?.userType;

  const getOptionInputField = () => {
    if (userType === "player") {
      return <PlayerItemsInputField />;
    }
    if (userType === "coachesStaff") {
      return <CoachItemsInputField />;
    }
    if (userType === "outsider") {
      return <></>;
    }
  };

  return (
    <MyPageLayout>
      <SubHeaderWrap>
        <SubHeader />
      </SubHeaderWrap>
      <MyPageForm id="myPageSubmit">
        <BasicItemsInputFieldWrap>
          <BasicItemsInputField />
        </BasicItemsInputFieldWrap>
        <OptionItemsInputFieldWrap>{getOptionInputField()}</OptionItemsInputFieldWrap>
        <FormActionButtonBox>
          <CancelButton text="취소" formId="myPageCancel" />
          <SubmitButton text="저장" formId="myPageSubmit" />
        </FormActionButtonBox>
      </MyPageForm>
    </MyPageLayout>
  );
};

export default MyPage;
