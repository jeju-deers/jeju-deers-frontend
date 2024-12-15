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
  const [userBelong, setUserBelong] = useState("");
  const [userAuthority, setUserAuthority] = useState("");

  const [searchUser, setSearchUser] = useState(USER_INFORMATION_DATA);

  const handleEnterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  console.log(userName);

  const handleClickSearchButton = () => {
    const filtered = USER_INFORMATION_DATA.filter((user) =>
      user.name.toLowerCase().includes(userName.toLowerCase()),
    );
    setSearchUser(filtered);
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
              <DropDown text="소속" options={BELONG_DATA}></DropDown>
              <DropDown text="역할" options={USER_TYPE_DATA}></DropDown>
              <DropDown text="권한" options={AUTHORITY_DATA}></DropDown>
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
