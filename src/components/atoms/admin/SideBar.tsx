import {
  JejuDeersTextBox,
  JejuDeersTextImage,
  SideBarBox,
  UserManagementBox,
  UserManagementImage,
  UserManagementText,
} from "./SideBarStyle";
import jejuDeersText from "~/assets/images/jeju_deers_text.svg";
import userManagement from "~/assets/images/user_management.svg";

const SideBar = () => {
  return (
    <SideBarBox>
      <JejuDeersTextBox>
        <JejuDeersTextImage src={jejuDeersText} />
      </JejuDeersTextBox>
      <UserManagementBox>
        <UserManagementImage src={userManagement} />
        <UserManagementText>사용자 관리</UserManagementText>
      </UserManagementBox>
    </SideBarBox>
  );
};

export default SideBar;
