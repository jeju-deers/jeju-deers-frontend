import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import BoardTitle from "~/components/atoms/news/news/BoardTitle";
import { BoardTitleWrap, NewsBoardWrap, NewsLayout, WriteButtonWrap } from "./NewsStyle";
import Board from "~/components/atoms/news/news/Board";
import WriteButton from "~/components/atoms/news/news/WriteButton";
import Pagination from "../../../molecules/news/Pagination";

function News() {
  const [boardlist, setBoardlist] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 15;
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response: AxiosResponse) => {
        setBoardlist(response.data);
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
        <Board boardlist={boardlist.slice(offset, offset + limit)} />
        <WriteButtonWrap>
          <WriteButton />
        </WriteButtonWrap>
      </NewsBoardWrap>
      <Pagination total={boardlist.length} limit={limit} page={page} setPage={setPage} />
    </NewsLayout>
  );
}

export default News;
