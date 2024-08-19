import { useEffect, useState } from "react";
import { BoardTitleWrap, BoardWrap, SupportLayout, WriteButtonWrap } from "./SupportStyles";
import { handleSearch } from "~/hooks/handleSearch";
import { useGetBoards } from "~/hooks/board/query/useGetBoards";
import BoardTitle from "~/common/components/atom/board/BoardTitle";
import Board from "~/common/components/atom/board/Board";
import WriteButton from "~/common/components/atom/board/WriteButton";
import Pagination from "~/common/components/molecules/board/Pagination";
import Search from "~/common/components/molecules/board/Search";

const Support = () => {
  const { data: supportData = [], isLoading, error } = useGetBoards("support");
  const [filteredBoardlist, setFilteredBoardlist] = useState(supportData);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilterOption, setsearchFilterOption] = useState("title");
  const limit = 15;
  const offset = (page - 1) * limit;

  useEffect(() => {
    setFilteredBoardlist(supportData);
  }, [supportData]);

  const showSearch = () => {
    const result = handleSearch(supportData, searchQuery, searchFilterOption);
    setFilteredBoardlist(result);

    setPage(1);
  };

  if (isLoading) {
    return <div>로딩중입니다</div>;
  }

  if (error) {
    return <div>에러</div>;
  }

  // if (isLoading) {
  //   return <PendingMessage />;
  // }

  // if (error) {
  //   return <ErrorMessage text="에러" />;
  // }

  return (
    <SupportLayout>
      <BoardTitleWrap>
        <BoardTitle text="서포터즈" />
      </BoardTitleWrap>
      <BoardWrap>
        <Board boardlist={filteredBoardlist.slice(offset, offset + limit)} />
        <WriteButtonWrap>
          <WriteButton />
        </WriteButtonWrap>
      </BoardWrap>
      <Pagination total={filteredBoardlist.length} limit={limit} page={page} setPage={setPage} />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchFilterOption={searchFilterOption}
        setSearchFilterOption={setsearchFilterOption}
        onSearch={showSearch}
      />
    </SupportLayout>
  );
};

export default Support;
