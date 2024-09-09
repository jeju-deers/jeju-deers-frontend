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
import ExternalItemsInputField from "~/components/organisms/myPage/ExternalItemsInputField";
import { FormEvent } from "react";
import useEditMyPage from "~/hooks/myPage/useEditMyPage";
import { useNavigate } from "react-router-dom";

const MyPage = ({ userInformation, updateUserInformation }: any) => {
  const navigate = useNavigate();

  const { formData, handleChangeInput } = useEditMyPage({ userInformation });
  const {
    userType,
    inputId,
    inputPassword,
    inputPasswordConfirm,
    inputName,
    inputEmail,
    inputSchool,
    inputStudentId,
    inputPositions,
    inputBackNumber,
    inputNickname,
    inputBirth,
    inputBelong,
    inputJoinYear,
  } = formData;

  const handleClickCancel = () => {
    navigate("/");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateUserInformation.mutate({
      userType: userType,
      userId: inputId,
      password: inputPassword,
      passwordConfirm: inputPasswordConfirm,
      name: inputName,
      email: inputEmail,
      school: inputSchool,
      studentId: inputStudentId,
      positions: inputPositions,
      backNumber: inputBackNumber,
      nickname: inputNickname,
      birth: inputBirth,
      belong: inputBelong,
      joinYear: inputJoinYear,
    });
  };

  const getOptionInputField = () => {
    if (userType === "player") {
      return (
        <PlayerItemsInputField
          temporaryUserInformation={formData}
          onChangeInput={handleChangeInput}
        />
      );
    }
    if (userType === "coach") {
      return (
        <CoachItemsInputField
          temporaryUserInformation={formData}
          onChangeInput={handleChangeInput}
        />
      );
    }
  };

  return (
    <MyPageLayout>
      <SubHeaderWrap>
        <SubHeader />
      </SubHeaderWrap>
      <MyPageForm id="myPageSubmit" onSubmit={handleSubmit}>
        <BasicItemsInputFieldWrap>
          {userType === "external" ? (
            <ExternalItemsInputField
              temporaryUserInformation={formData}
              onChangeInput={handleChangeInput}
            />
          ) : (
            <BasicItemsInputField
              temporaryUserInformation={formData}
              onChangeInput={handleChangeInput}
            />
          )}
        </BasicItemsInputFieldWrap>
        <OptionItemsInputFieldWrap>{getOptionInputField()}</OptionItemsInputFieldWrap>
        <FormActionButtonBox>
          <CancelButton text="취소" onClick={handleClickCancel} />
          <SubmitButton text="저장" formId="myPageSubmit" />
        </FormActionButtonBox>
      </MyPageForm>
    </MyPageLayout>
  );
};

export default MyPage;
