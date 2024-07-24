import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import BoardTitle from "~/components/atoms/news/news/BoardTitle";
import { BoardTitleWrap, NewsBoardWrap, NewsLayout, WriteButtonWrap } from "./NewsStyle";
import Board from "~/components/atoms/news/news/Board";
import WriteButton from "~/components/atoms/news/news/WriteButton";
import Pagination from "../../../molecules/news/Pagination";
import Search from "~/components/molecules/news/Search";

interface Props {
  name: string;
  title: string;
}

function News() {
  const [boardlist, setBoardlist] = useState([]);
  const [filteredBoardlist, setFilteredBoardlist] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilterOption, setsearchFilterOption] = useState("title");
  const limit = 15;
  const offset = (page - 1) * limit;

  const handleSearch = () => {
    const filtered = boardlist.filter((item: Props) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredBoardlist(filtered);
    setPage(1);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response: AxiosResponse) => {
        setBoardlist(response.data);
        setFilteredBoardlist(response.data);
      })
      .catch((error: AxiosError) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

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
        onSearch={handleSearch}
      />
    </NewsLayout>
  );
}

export default News;
