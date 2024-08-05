import { BoardBox, BoardHeaderBox, BoardItemBox, BoardRowBox } from "./BoardStyles";

interface Props {
  boardlist: {
    id: number;
    title: string;
    position: string;
    name: string;
    date: string;
    check: number;
  }[];
}

// TODO: [2024-07-03] 명단 데이터 불러오기 api 연결 후, 실제 데이터를 가지고 와야합니다
const Board = ({ boardlist }: Props) => {
  const totalRows = 15;
  const emptyRows = totalRows - boardlist.length;
  return (
    <BoardBox>
      <BoardHeaderBox>
        <BoardItemBox>번호</BoardItemBox>
        <BoardItemBox>제목</BoardItemBox>
        <BoardItemBox>작성자</BoardItemBox>
        <BoardItemBox>등록일</BoardItemBox>
        <BoardItemBox>조회</BoardItemBox>
      </BoardHeaderBox>
      {boardlist.map(({ id, title, position, name, date, check }) => (
        <BoardRowBox key={id}>
          <BoardItemBox>{id}</BoardItemBox>
          <BoardItemBox>{title}</BoardItemBox>
          <BoardItemBox>
            {position} {name}
          </BoardItemBox>
          <BoardItemBox>{date}</BoardItemBox>
          <BoardItemBox>{check}</BoardItemBox>
        </BoardRowBox>
      ))}
      {[...Array(emptyRows)].map((_, index) => (
        <BoardRowBox key={`empty-${index}`}>
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
