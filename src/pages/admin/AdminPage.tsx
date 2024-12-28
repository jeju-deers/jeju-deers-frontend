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
import PendingMessage from "~/common/components/atom/PendingMessage";
import BELONG_DATA from "~/constants/belongData";
import USER_TYPE_DATA from "~/constants/userTypeData";
import AUTHORITY_DATA from "~/constants/authorityData";
import { CURRENT_PAGE, ADMIN_USER_COUNT_PER_PAGE } from "~/constants/constants";
import useGetUsersInformation from "~/hooks/admin/query/useGetUsersInformation";
import { useState } from "react";

interface User {
  userId: string;
  name: string;
  belong: string;
  userType: string;
  role?: string;
  authority?: string;
  modifiedDate?: string;
}

const AdminPage = () => {
  const [selectedUserId, setSelectedUserId] = useState<string[]>([]);
  // TODO: [2024-12-21] 백엔드에서 admin 페이지에 반영될 사용자 정보 api를 생성한 후, 해당 api로 교체 필요
  const { usersInformation = [], isLoading } = useGetUsersInformation();

  const startUserIndex = (CURRENT_PAGE - 1) * ADMIN_USER_COUNT_PER_PAGE;
  const endUserIndex = CURRENT_PAGE * ADMIN_USER_COUNT_PER_PAGE;
  const currentPageUsers = usersInformation.slice(startUserIndex, endUserIndex);
  const currentPageUsersId = currentPageUsers.map(({ userId }: User) => userId);

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

  if (isLoading) {
    <PendingMessage />;
  }

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

              {/* TODO: [2024-12-15] 백엔드에서 역할, 권한, 수정날짜 데이터 추가 되면 변경 필요 */}
              {usersInformation?.map((userInformation: User) => (
                <ListItemBox>
                  <CheckBoxInput
                    type="checkbox"
                    checked={selectedUserId.includes(userInformation.userId)}
                    onChange={(event) => handleSelectCheckBox(event, userInformation.userId)}
                  />
                  <ListItemSection basis="35%" text={userInformation.name} />
                  <ListItemSection basis="9.4%" text={userInformation.belong} />
                  <ListItemSection basis="28.6%" text={userInformation.userType} />
                  <ListItemSection basis="9.4%" text={userInformation.authority || "일반 회원"} />
                  <ListItemSection
                    basis="38.1%"
                    text={userInformation.modifiedDate || "2024.08.23. 14:10"}
                  />
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
