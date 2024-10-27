import { useEffect, useState } from "react";
import { handleSearch } from "~/hooks/handleSearch";
import { useGetBoards } from "~/hooks/board/query/useGetBoards";
import BoardTitle from "~/common/components/atom/board/BoardTitle";
import Board from "~/common/components/atom/board/Board";
import WriteButton from "~/common/components/atom/board/WriteButton";
import Pagination from "~/common/components/molecules/board/Pagination";
import Search from "~/common/components/molecules/board/Search";
import PendingMessage from "~/common/components/atom/PendingMessage";
import ErrorMessage from "~/common/components/atom/ErrorMessage";
import { BoardTitleWrap, BoardWrap, CommonBoardLayout, WriteButtonWrap } from "./CommonBoardStyles";

interface Props {
  title: string;
  Boards: string;
}

const CommonBoard = ({ title, Boards }: Props) => {
  const { data: boardData = [], isLoading, error } = useGetBoards(Boards);
  const [filteredBoardlist, setFilteredBoardlist] = useState(boardData);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilterOption, setSearchFilterOption] = useState("title");
  const limit = 15;
  const offset = (page - 1) * limit;

  useEffect(() => {
    setFilteredBoardlist(boardData);
  }, [boardData]);

  const showSearch = () => {
    const result = handleSearch(boardData, searchQuery, searchFilterOption);
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
    <CommonBoardLayout>
      <BoardTitleWrap>
        <BoardTitle text={title} />
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
        setSearchFilterOption={setSearchFilterOption}
        onSearch={showSearch}
      />
    </CommonBoardLayout>
  );
};

export default CommonBoard;
