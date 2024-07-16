import RosterItemsInputField from "~/components/organisms/myPage/RosterItemsInputField";
import {
  BasicItemsInputFieldWrap,
  FormActionButtonBox,
  MyPageForm,
  MyPageLayout,
  OptionItemsInputFieldWrap,
  SubHeaderWrap,
} from "./MyPageStyles";
import CoachesStaffItemsInputField from "~/components/organisms/myPage/CoachesStaffItemsInputField";
import SubHeader from "~/components/molecules/myPage/subHeader/SubHeader";
import BasicItemsInputField from "~/components/organisms/myPage/BasicItemsInputField";
import { useState } from "react";
import SubmitButton from "~/components/atoms/myPage/body/SubmitButton";
import CancelButton from "~/components/atoms/myPage/body/CancelButton";

const MyPage = () => {
  const [selectedOption, setSelectedOption] = useState("roster");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const selectedId = event.target.id;
  //     setSelectedOption(selectedId);
  //   };

  const getOptionInputField = () => {
    if (selectedOption === "roster") {
      return <RosterItemsInputField />;
    }
    if (selectedOption === "coachesStaff") {
      return <CoachesStaffItemsInputField />;
    }
    if (selectedOption === "outsider") {
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
