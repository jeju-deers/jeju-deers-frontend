import { BoardBox, BoardHeaderBox, BoardItemBox, BoardRowBox } from "./BoardStyles";

interface Props {
  boardlist: {
    id: number;
    title: string;
    content: string;
    owner: string;
    images: [];
    videos: [];
    createdAt: string;
    updatedAt: string;
    views: number;
  }[];
}

const Board = ({ boardlist }: Props) => {
  const totalRows = 15;
  const emptyRows = totalRows - boardlist.length;
  let currentId = 1;

  const formatDate = (date: string) => {
    return date.split("T")[0];
  };

  return (
    <BoardBox>
      <BoardHeaderBox>
        <BoardItemBox>번호</BoardItemBox>
        <BoardItemBox>제목</BoardItemBox>
        <BoardItemBox>작성자</BoardItemBox>
        <BoardItemBox>등록일</BoardItemBox>
        <BoardItemBox>조회</BoardItemBox>
      </BoardHeaderBox>
      {boardlist.map(({ id, title, owner, createdAt, views }) => (
        <BoardRowBox key={id}>
          <BoardItemBox>{currentId++}</BoardItemBox>
          <BoardItemBox>{title}</BoardItemBox>
          <BoardItemBox>{owner}</BoardItemBox>
          <BoardItemBox>{formatDate(createdAt)}</BoardItemBox>
          <BoardItemBox>{views}</BoardItemBox>
        </BoardRowBox>
      ))}
      {[...Array(emptyRows)].map((_, index) => (
        <BoardRowBox key={`${index}-empty`}>
          <BoardItemBox>&nbsp;</BoardItemBox>
          <BoardItemBox>&nbsp;</BoardItemBox>
          <BoardItemBox>&nbsp;</BoardItemBox>
          <BoardItemBox>&nbsp;</BoardItemBox>
          <BoardItemBox>&nbsp;</BoardItemBox>
        </BoardRowBox>
      ))}
    </BoardBox>
  );
};

export default Board;
