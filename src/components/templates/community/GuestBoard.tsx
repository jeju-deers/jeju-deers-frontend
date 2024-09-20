import { useEffect, useState } from "react";
import { BoardTitleWrap, BoardWrap, GuestBoardLayout, WriteButtonWrap } from "./GuestBoardStyles";
import { handleSearch } from "~/hooks/handleSearch";
import { useGetBoards } from "~/hooks/board/query/useGetBoards";
import BoardTitle from "~/common/components/atom/board/BoardTitle";
import Board from "~/common/components/atom/board/Board";
import WriteButton from "~/common/components/atom/board/WriteButton";
import Pagination from "~/common/components/molecules/board/Pagination";
import Search from "~/common/components/molecules/board/Search";
import PendingMessage from "~/common/components/atom/PendingMessage";
import ErrorMessage from "~/common/components/atom/ErrorMessage";

const GuestBoard = () => {
  const { data: guestBoardData = [], isLoading, error } = useGetBoards("guest");
  const [filteredBoardlist, setFilteredBoardlist] = useState(guestBoardData);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilterOption, setsearchFilterOption] = useState("title");
  const limit = 15;
  const offset = (page - 1) * limit;

  useEffect(() => {
    setFilteredBoardlist(guestBoardData);
  }, [guestBoardData]);

  const showSearch = () => {
    const result = handleSearch(guestBoardData, searchQuery, searchFilterOption);
    setFilteredBoardlist(result);

    setPage(1);
  };

  if (isLoading) {
    return <PendingMessage />;
  }

  if (error) {
    return <ErrorMessage text="에러" />;
  }

  return (
    <GuestBoardLayout>
      <BoardTitleWrap>
        <BoardTitle text="외부인 게시판" />
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
    </GuestBoardLayout>
  );
};

export default GuestBoard;
