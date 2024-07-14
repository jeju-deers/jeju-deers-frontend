import { BoardBox, BoardHeader, BoardItem, BoardRow } from "./BoardStyles";

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
const RosterList = ({ boardlist }: Props) => {
  const totalRows = 15;
  const emptyRows = totalRows - boardlist.length;
  return (
    <BoardBox>
      <BoardHeader>
        <BoardItem>번호</BoardItem>
        <BoardItem>제목</BoardItem>
        <BoardItem>작성자</BoardItem>
        <BoardItem>등록일</BoardItem>
        <BoardItem>조회</BoardItem>
      </BoardHeader>
      {boardlist.map(({ id, title, position, name, date, check }) => (
        <BoardRow key={id}>
          <BoardItem>{id}</BoardItem>
          <BoardItem>{title}</BoardItem>
          <BoardItem>
            {position} {name}
          </BoardItem>
          <BoardItem>{date}</BoardItem>
          <BoardItem>{check}</BoardItem>
        </BoardRow>
      ))}
      {[...Array(emptyRows)].map((_, index) => (
        <BoardRow key={`empty-${index}`}>
          <BoardItem>&nbsp;</BoardItem>
          <BoardItem>&nbsp;</BoardItem>
          <BoardItem>&nbsp;</BoardItem>
          <BoardItem>&nbsp;</BoardItem>
          <BoardItem>&nbsp;</BoardItem>
        </BoardRow>
      ))}
    </BoardBox>
  );
};

export default RosterList;
