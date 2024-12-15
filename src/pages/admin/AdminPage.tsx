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
  const [selectedUserId, setSelectedUserId] = useState<string[]>([]);

  const userCountPerPage = 25;
  const currentPage = 1;
  const currentPageUsers = USER_INFORMATION_DATA.slice((currentPage - 1) * userCountPerPage);
  const currentPageUsersId = currentPageUsers.map((user) => user.userId);

  const updateSelectedUserId = (userId: string) => {
    setSelectedUserId((previousState: string[]) => [...new Set([...previousState, userId])]);
  };

  const removeSelectedUserId = (userId: string) => {
    setSelectedUserId((previousState: string[]) =>
      previousState.filter((removeId) => removeId !== userId),
    );
  };

  const handleSelectAllCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkbox = event.target;
    checkbox.checked ? setSelectedUserId(currentPageUsersId) : setSelectedUserId([]);
  };

  const handleSelectCheckBox = (event: React.ChangeEvent<HTMLInputElement>, userId: string) => {
    const checkbox = event.target;
    checkbox.checked ? updateSelectedUserId(userId) : removeSelectedUserId(userId);
  };

  const handleDeleteUser = (selectedUserId: string[]) => {
    console.log(selectedUserId);
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
              <SearchInput type="text" placeholder="이름" />
              <DropDown text="소속" options={BELONG_DATA}></DropDown>
              <DropDown text="역할" options={USER_TYPE_DATA}></DropDown>
              <DropDown text="권한" options={AUTHORITY_DATA}></DropDown>
              <SearchButtonWrap>
                <SearchButton>검색</SearchButton>
              </SearchButtonWrap>
            </SearchBox>
            <DeleteButton onClick={() => handleDeleteUser(selectedUserId)}>삭제</DeleteButton>
            <ListBox>
              <ListHeaderBox>
                <CheckBoxInput
                  type="checkbox"
                  onChange={(event) => handleSelectAllCheckBox(event)}
                />
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

              {USER_INFORMATION_DATA.map((user) => (
                <ListItemBox>
                  <CheckBoxInput
                    type="checkbox"
                    onChange={(event) => handleSelectCheckBox(event, user.userId)}
                  />
                  <ListItemSection basis="35%" text={user.name} />
                  <ListItemSection basis="9.4%" text={user.belong} />
                  <ListItemSection basis="28.6%" text="선수" />
                  <ListItemSection basis="9.4%" text="일반 회원" />
                  <ListItemSection basis="38.1%" text="2024.08.23. 14:10" />
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
