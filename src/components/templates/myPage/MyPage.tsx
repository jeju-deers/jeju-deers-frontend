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
import { GetUserInformationProps } from "~/api/types/users";

const MyPage = ({ userInformation }: GetUserInformationProps) => {
  const { formData, handleChangeInput } = useEditMyPage({ userInformation });
  const userType = formData.userType;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let userInputValues;

    const basicInputValues = {
      userId: formData.inputId,
      password: formData.inputPassword,
      passwordConfirm: formData.inputPasswordConfirm,
      name: formData.inputName,
      nickname: formData.inputNickname,
      birth: formData.inputBirth,
      email: formData.inputEmail,
    };

    if (userType === "player") {
      const playerInputValues = {
        ...basicInputValues,
        school: formData.inputSchool,
        studentId: formData.inputStudentId,
        positions: formData.inputPositions,
        backNumber: formData.inputBackNumber,
        belong: formData.inputBelong,
        joinYear: formData.inputJoinYear,
      };
      userInputValues = playerInputValues;
      console.log(userInputValues);
    }

    if (userType === "coach") {
      const coachInputValues = {
        ...basicInputValues,
        school: formData.inputSchool,
        studentId: formData.inputStudentId,
        positions: formData.inputPositions,
      };
      userInputValues = coachInputValues;
      console.log(userInputValues);
    }

    if (userType === "external") {
      const externalInputValues = {
        userId: formData.inputId,
        password: formData.inputPassword,
        passwordConfirm: formData.inputPasswordConfirm,
        name: formData.inputName,
        nickname: formData.inputNickname,
        email: formData.inputEmail,
      };
      userInputValues = externalInputValues;
    }
    console.log(userInputValues);
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
    //   if (temporaryData.userType === "external") {
    //     return (
    //       <ExternalItemsInputField
    //         temporaryUserInformation={formData}
    //         onChangeInput={handleChangeInput}
    //       />
    //     );
    //   }
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
          <CancelButton text="취소" formId="myPageCancel" />
          <SubmitButton text="저장" formId="myPageSubmit" />
        </FormActionButtonBox>
      </MyPageForm>
    </MyPageLayout>
  );
};

export default MyPage;
