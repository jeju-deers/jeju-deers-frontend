import { useNavigate } from "react-router-dom";
import {
  BoardBox,
  BoardHeaderBox,
  BoardItemBox,
  BoardRowBox,
  DeleteButton,
  EditButton,
} from "./BoardStyles";
import useDeleteBoard from "~/hooks/board/mutate/useDeleteBoard";

interface Props {
  boardlist: {
    id: string;
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
  const { mutate: deleteBoard } = useDeleteBoard();
  const totalRows = 15;
  const navigate = useNavigate();

  const currentOwner = localStorage.getItem("owner");

  const emptyRows = totalRows - boardlist.length;

  const formatDate = (date: string) => {
    return date.split("T")[0];
  };

  const handleEdit = (id: string) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("토큰이 만료되었습니다. 다시 로그인해주세요");
      return;
    }
    navigate(`./update/${id}`);
  };

  const handleDelete = (id: string) => {
    const token = localStorage.getItem("token");
    console.dir(boardlist);
    console.log(token);
    console.log(id);
    if (!token) {
      console.error("토큰이 만료되었습니다. 다시 로그인해주세요");
      return;
    }
    if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
      deleteBoard({ id, token });
    }
  };

  const handleTitleClick = (id: string) => {
    navigate(`/news/news/board/${id}`);
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
      {boardlist.map(({ id, title, owner, createdAt, views }, index) => {
        const isOwner = currentOwner === owner;
        return (
          <BoardRowBox key={id}>
            <BoardItemBox>{index + 1}</BoardItemBox>
            <BoardItemBox onClick={() => handleTitleClick(id)}>{title}</BoardItemBox>
            <BoardItemBox>{owner}</BoardItemBox>
            <BoardItemBox>{formatDate(createdAt)}</BoardItemBox>
            <BoardItemBox>{views}</BoardItemBox>
            {isOwner && (
              <>
                <EditButton onClick={() => handleEdit(id)}>수정</EditButton>
                <DeleteButton onClick={() => handleDelete(id)}>삭제</DeleteButton>
              </>
            )}
          </BoardRowBox>
        );
      })}
      {[...Array(emptyRows)].map((_, index) => (
        <BoardRowBox key={`${index}-empty`}>
          <BoardItemBox></BoardItemBox>
          <BoardItemBox></BoardItemBox>
          <BoardItemBox></BoardItemBox>
          <BoardItemBox></BoardItemBox>
          <BoardItemBox></BoardItemBox>
        </BoardRowBox>
      ))}
    </BoardBox>
  );
};

export default Board;
