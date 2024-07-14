import BoardTitle from "~/components/atoms/news/news/BoardTitle";
import { BoardTitleWrap, NewsBoardWrap, NewsLayout, WriteButtonWrap } from "./NewsStyle";
import Board from "~/components/atoms/news/news/Board";
import NEWS from "~/constants/newsData";
import WriteButton from "~/components/atoms/news/news/WriteButton";

const News = () => {
  return (
    <NewsLayout>
      <BoardTitleWrap>
        <BoardTitle text="공지사항" />
      </BoardTitleWrap>
      <NewsBoardWrap>
        <Board boardlist={NEWS} />
        <WriteButtonWrap>
          <WriteButton />
        </WriteButtonWrap>
      </NewsBoardWrap>
    </NewsLayout>
  );
};

export default News;
