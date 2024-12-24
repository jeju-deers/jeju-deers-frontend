import SideBar from "~/components/atoms/admin/SideBar";
import {
  AccountEditButton,
  CheckBoxInput,
  ContentBox,
  ContentBoxWrap,
  ContentTitleBox,
  DeleteButton,
  ExitButton,
  ExitButtonBox,
  ListBox,
  ListHeaderBox,
  ListItemBox,
  ListItemTextSpan,
  ListSectionBox,
  PrimaryContentBox,
  SearchBox,
  SearchButton,
  SearchButtonWrap,
  SearchInput,
  SideBarWrap,
  WholePageBox,
} from "./AdminPageStyles";
import Header from "~/components/atoms/admin/Header";
import ListHeaderSection from "~/components/atoms/admin/content/ListHeaderSection";
import ListItemSection from "~/components/atoms/admin/content/ListItemSection";
import DropDown from "~/components/atoms/admin/content/DropDown";
import BELONG_DATA from "~/constants/belongData";
import USER_TYPE_DATA from "~/constants/userTypeData";
import AUTHORITY_DATA from "~/constants/authorityData";
import USER_INFORMATION_DATA from "~/constants/userInformationData";
import { useState } from "react";

const AdminPage = () => {
  const [userName, setUserName] = useState("");
  const [childBelongOption, setChildBelongOption] = useState("");
  const [childRoleOption, setChildRoleOption] = useState("");
  const [childAuthorityOption, setChildAuthorityOption] = useState("");

  const [searchUser, setSearchUser] = useState(USER_INFORMATION_DATA);

  const handleEnterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  console.log(userName);

  // TODO: [2023-12-24] 추후 백엔드에서 관리자의 사용자 목록 검색 api가 구현되면, 해당 api를 연결해야 합니다.
  const handleClickSearchButton = () => {
    const filtered = USER_INFORMATION_DATA.filter(
      (user) =>
        user.name.toLowerCase().includes(userName.toLowerCase()) &&
        user.belong.toLowerCase().includes(childBelongOption.toLowerCase()) &&
        user.userType.toLowerCase().includes(childRoleOption.toLowerCase()) &&
        user.authority.toLowerCase().includes(childAuthorityOption.toLowerCase()),
    );
    setSearchUser(filtered);
  };

  const handleChildBelongOptionChange = (option: string) => {
    setChildBelongOption(option);
  };
  const handleChildRoleOptionChange = (option: string) => {
    setChildRoleOption(option);
  };
  const handleChildAuthorityOptionChange = (option: string) => {
    setChildAuthorityOption(option);
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
            <ContentTitleBox>사용자 정보 목록</ContentTitleBox>
            <SearchBox>
              <SearchInput
                value={userName}
                onChange={handleEnterName}
                type="text"
                placeholder="이름"
              />
              <DropDown
                text="소속"
                options={BELONG_DATA}
                onOptionSelected={handleChildBelongOptionChange}></DropDown>
              <DropDown
                text="역할"
                options={USER_TYPE_DATA}
                onOptionSelected={handleChildRoleOptionChange}></DropDown>
              <DropDown
                text="권한"
                options={AUTHORITY_DATA}
                onOptionSelected={handleChildAuthorityOptionChange}></DropDown>
              <SearchButtonWrap>
                <SearchButton onClick={handleClickSearchButton}>검색</SearchButton>
              </SearchButtonWrap>
            </SearchBox>
            <DeleteButton>삭제</DeleteButton>
            <ListBox>
              <ListHeaderBox>
                <CheckBoxInput type="checkbox" />
                <ListHeaderSection basis="35%" text="이름" />
                <ListHeaderSection basis="9.4%" text="소속" />
                <ListHeaderSection basis="28.6%" text="역할" />
                <ListHeaderSection basis="9.4%" text="권한" />
                <ListHeaderSection basis="37.9%" text="수정날짜" />
                <ListSectionBox>
                  <AccountEditButton opacity="hidden">
                    <ListItemTextSpan></ListItemTextSpan>
                  </AccountEditButton>
                </ListSectionBox>
              </ListHeaderBox>
              {searchUser.map((user) => (
                <ListItemBox>
                  <CheckBoxInput type="checkbox" />
                  <ListItemSection basis="35%" text={user.name} />
                  <ListItemSection basis="9.4%" text={user.belong} />
                  <ListItemSection basis="28.6%" text={user.userType} />
                  <ListItemSection basis="9.4%" text={user.authority} />
                  <ListItemSection basis="38.1%" text={user.createAt} />
                  <ListSectionBox>
                    <AccountEditButton>
                      <ListItemTextSpan>정보수정</ListItemTextSpan>
                    </AccountEditButton>
                  </ListSectionBox>
                </ListItemBox>
              ))}
            </ListBox>
            <ExitButtonBox>
              <ExitButton>나가기</ExitButton>
            </ExitButtonBox>
          </ContentBox>
        </ContentBoxWrap>
      </PrimaryContentBox>
    </WholePageBox>
  );
};

export default AdminPage;
