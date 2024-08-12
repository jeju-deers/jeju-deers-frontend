import { useEffect, useState } from "react";
import BoardTitle from "~/components/atoms/news/news/BoardTitle";
import { BoardTitleWrap, NewsBoardWrap, NewsLayout, WriteButtonWrap } from "./NewsStyle";
import Board from "~/components/atoms/news/news/Board";
import WriteButton from "~/components/atoms/news/news/WriteButton";
import Pagination from "../../../molecules/news/Pagination";
import Search from "~/components/molecules/news/Search";
import { handleSearch } from "~/hooks/handleSearch";
import { useGetBoards } from "~/hooks/board/useBoardData";

const News = () => {
  const { data: newsData = [], isLoading, error } = useGetBoards("news");
  const [filteredBoardlist, setFilteredBoardlist] = useState(newsData);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilterOption, setsearchFilterOption] = useState("title");
  const limit = 15;
  const offset = (page - 1) * limit;

  useEffect(() => {
    setFilteredBoardlist(newsData);
  }, [newsData]);

  const showSearch = () => {
    const result = handleSearch(newsData, searchQuery, searchFilterOption);
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
    <NewsLayout>
      <BoardTitleWrap>
        <BoardTitle text="공지사항" />
      </BoardTitleWrap>
      <NewsBoardWrap>
        <Board boardlist={filteredBoardlist.slice(offset, offset + limit)} />
        <WriteButtonWrap>
          <WriteButton />
        </WriteButtonWrap>
      </NewsBoardWrap>
      <Pagination total={filteredBoardlist.length} limit={limit} page={page} setPage={setPage} />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchFilterOption={searchFilterOption}
        setSearchFilterOption={setsearchFilterOption}
        onSearch={showSearch}
      />
    </NewsLayout>
  );
};

export default News;
