import SideBar from "~/components/atoms/adminEditAccount/SideBar";
import {
  AdminEditAccountForm,
  BasicItemsInputFieldWrap,
  ContentBox,
  ContentBoxWrap,
  FormActionButtonBox,
  OptionItemsInputFieldWrap,
  PrimaryContentBox,
  SideBarWrap,
  SubHeaderWrap,
  WholePageBox,
} from "./AdminEditAccountStyles";
import SubHeader from "~/common/components/molecules/accountManagement/subHeader/SubHeader";
import Header from "~/components/atoms/adminEditAccount/Header";
import CancelButton from "~/common/components/atom/accountManagement/body/CancelButton";
import SubmitButton from "~/common/components/atom/accountManagement/body/SubmitButton";
import BasicItemsInputField from "~/components/organisms/adminEditAccount/BasicItemsInputField";
import { useNavigate } from "react-router-dom";
import BasicItemsSelectField from "~/components/organisms/adminEditAccount/BasicItemsSelectField";
import CoachItemsInputField from "~/components/organisms/adminEditAccount/CoachItemsInputField";
import PlayerItemsInputField from "~/components/organisms/adminEditAccount/PlayerItemsInputField";
import useEditUserAccount from "~/hooks/adminEditAccount/useEditUserAccount";
import usePutEditAccount from "~/hooks/admin/query/mutate/usePutEditAccount";
import { FormEvent } from "react";

interface Props {
  userInformation: any;
}

const AdminEditAccount = ({ userInformation }: Props) => {
  const navigate = useNavigate();

  const { formData, handleChangeInput } = useEditUserAccount(userInformation);

  const {
    adminEditAccountUserType: userType,
    adminEditAccountUserId: userId,
    adminEditAccountBelong: belong,
    // TODO: [2025-02-05] 백엔드에서 role이 userType으로 수정된 이후, role을 userType으로 변경해야합니다.
    adminEditAccountUserType: role,
    adminEditAccountPermission: permission,
    adminEditAccountName: name,
    adminEditAccountNickname: nickname,
    adminEditAccountEmail: email,
    adminEditAccountSchool: school,
    adminEditAccountStudentId: studentId,
    adminEditAccountPositions: positions,
  } = formData;

  const { mutate: putEditUserAccount } = usePutEditAccount();

  const getOptionInputField = () => {
    if (userType === "player") {
      return <PlayerItemsInputField userInformation={formData} onChangeInput={handleChangeInput} />;
    }
    if (userType === "coach") {
      return <CoachItemsInputField userInformation={formData} onChangeInput={handleChangeInput} />;
    }
  };

  const handleSubmitEditAccount = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    putEditUserAccount({
      userId,
      belong,
      role,
      permission,
      name,
      nickname,
      email,
      school,
      studentId,
      positions,
    });
  };

  const handleClickCancel = () => {
    navigate("/admin");
  };

  return (
    <WholePageBox>
      <SideBarWrap>
        <SideBar />
      </SideBarWrap>
      <PrimaryContentBox>
        <Header />
        <ContentBoxWrap>
          <ContentBox>
            <SubHeaderWrap>
              <SubHeader subTitle="정보수정" />
            </SubHeaderWrap>
            <AdminEditAccountForm id="adminEditAccountSubmit" onSubmit={handleSubmitEditAccount}>
              <BasicItemsInputFieldWrap>
                <BasicItemsSelectField userInformation={formData} />
                <BasicItemsInputField
                  userInformation={formData}
                  onChangeInput={handleChangeInput}
                />
              </BasicItemsInputFieldWrap>
              <OptionItemsInputFieldWrap>{getOptionInputField()}</OptionItemsInputFieldWrap>
              <FormActionButtonBox>
                <CancelButton text="취소" onClick={handleClickCancel} />
                <SubmitButton text="저장" formId="adminEditAccountSubmit" />
              </FormActionButtonBox>
            </AdminEditAccountForm>
          </ContentBox>
        </ContentBoxWrap>
      </PrimaryContentBox>
    </WholePageBox>
  );
};

export default AdminEditAccount;
