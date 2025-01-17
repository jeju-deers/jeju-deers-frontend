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
import { ADMIN_USER_COUNT_PER_PAGE } from "~/constants/constants";
import { useEffect, useState } from "react";
import useGetUserList from "~/hooks/admin/query/useGetUserList";
import ErrorMessage from "~/common/components/atom/ErrorMessage";
import Pagination from "~/common/components/molecules/board/Pagination";
import useDeleteUserList from "~/hooks/admin/query/mutate/useDeleteUserList";

interface User {
  userId: string;
  name: string;
  belong: string;
  userType: string;
  role?: string;
  permission?: string;
  updatedAt?: string;
}

const AdminPage = () => {
  const { userListData, isLoading } = useGetUserList();
  const { mutate: deleteUserList } = useDeleteUserList();

  const [selectedUserId, setSelectedUserId] = useState<string[]>([]);
  const [searchUserName, setSearchUserName] = useState("");
  const [searchOptions, setSearchOptions] = useState({
    belong: "",
    role: "",
    permission: "",
  });
  const [userList, setUserList] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (userListData?.latestUsers) {
      setUserList(userListData.latestUsers);
    }
  }, [userListData]);

  if (isLoading) {
    return <PendingMessage />;
  }

  if (!userListData) {
    return <ErrorMessage text="사용자 목록을 불러오지 못했습니다." />;
  }

  const firstUserIndex = (page - 1) * ADMIN_USER_COUNT_PER_PAGE;
  const lastUserIndex = page * ADMIN_USER_COUNT_PER_PAGE;
  const currentPageUserList = userList.slice(firstUserIndex, lastUserIndex);
  const currentPageUsersId = currentPageUserList.map(({ userId }: User) => userId);

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
    deleteUserList(selectedUserId);
  };

  const handleEnterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUserName(event.target.value);
  };

  // TODO: [2023-12-24] 추후 백엔드에서 관리자의 사용자 목록 검색 api가 구현되면, 해당 api를 연결해야 합니다.
  const handleClickSearchButton = () => {
    const matchValues = (userValue?: string, searchValue?: string) =>
      !searchValue || userValue?.includes(searchValue);

    const filtered = userList.filter(({ name, belong, role, permission }: User) => {
      return (
        matchValues(name, searchUserName) &&
        matchValues(belong, searchOptions.belong) &&
        matchValues(role, searchOptions.role) &&
        matchValues(permission, searchOptions.permission)
      );
    });
    setUserList(filtered);
  };

  const handleSearchOptionsChange = (searchOption: string) => (value: string) => {
    setSearchOptions((previous) => ({ ...previous, [searchOption]: value }));
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
                value={searchUserName}
                onChange={handleEnterName}
                type="text"
                placeholder="이름"
              />
              <DropDown
                text="소속"
                options={BELONG_DATA}
                onOptionSelected={handleSearchOptionsChange("belong")}
              />
              <DropDown
                text="역할"
                options={USER_TYPE_DATA}
                onOptionSelected={handleSearchOptionsChange("role")}
              />
              <DropDown
                text="권한"
                options={AUTHORITY_DATA}
                onOptionSelected={handleSearchOptionsChange("authority")}
              />
              <SearchButtonWrap>
                <SearchButton onClick={handleClickSearchButton}>검색</SearchButton>
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
              {currentPageUserList?.map(
                ({ userId, name, belong, userType, permission, updatedAt }: User) => (
                  <ListItemBox>
                    <CheckBoxInput
                      type="checkbox"
                      checked={selectedUserId.includes(userId)}
                      onChange={(event) => handleSelectCheckBox(event, userId)}
                    />
                    <ListItemSection basis="35%" text={name} />
                    <ListItemSection basis="9.4%" text={belong} />
                    <ListItemSection basis="28.6%" text={userType} />
                    <ListItemSection basis="9.4%" text={permission || "일반 회원"} />
                    <ListItemSection basis="38.1%" text={updatedAt || "2024.08.23. 14:10"} />
                    <ListSectionBox>
                      <AccountEditButton>
                        <ListItemTextSpan>정보수정</ListItemTextSpan>
                      </AccountEditButton>
                    </ListSectionBox>
                  </ListItemBox>
                ),
              )}
            </ListBox>
            <Pagination
              total={userList.length}
              limit={ADMIN_USER_COUNT_PER_PAGE}
              page={page}
              setPage={setPage}
            />
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
