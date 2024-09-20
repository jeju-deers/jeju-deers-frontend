import { useEffect, useState } from "react";
import { BoardTitleWrap, BoardWrap, TeamBoardLayout, WriteButtonWrap } from "./TeamBoardStyles";
import { handleSearch } from "~/hooks/handleSearch";
import { useGetBoards } from "~/hooks/board/query/useGetBoards";
import BoardTitle from "~/common/components/atom/board/BoardTitle";
import Board from "~/common/components/atom/board/Board";
import WriteButton from "~/common/components/atom/board/WriteButton";
import Pagination from "~/common/components/molecules/board/Pagination";
import Search from "~/common/components/molecules/board/Search";
import PendingMessage from "~/common/components/atom/PendingMessage";
import ErrorMessage from "~/common/components/atom/ErrorMessage";

const TeamBoard = () => {
  const { data: teamBoardData = [], isLoading, error } = useGetBoards("team");
  const [filteredBoardlist, setFilteredBoardlist] = useState(teamBoardData);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilterOption, setsearchFilterOption] = useState("title");
  const limit = 15;
  const offset = (page - 1) * limit;

  useEffect(() => {
    setFilteredBoardlist(teamBoardData);
  }, [teamBoardData]);

  const showSearch = () => {
    const result = handleSearch(teamBoardData, searchQuery, searchFilterOption);
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
    <TeamBoardLayout>
      <BoardTitleWrap>
        <BoardTitle text="선수 게시판" />
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
    </TeamBoardLayout>
  );
};

export default TeamBoard;
