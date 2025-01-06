import { useParams } from "react-router-dom";
import ErrorMessage from "~/common/components/atom/ErrorMessage";
import BoardDetail from "~/common/components/templates/boardDetail/BoardDetail";

const BoardDetailPage = () => {
  // TODO: [2024-10-26] 조회할 게시글의 아이디를 임의로 적용. 추후 수정 필요.
  const singleBoardId = useParams().id;

  if (!singleBoardId) {
    console.log("올바른 singleBoardId가 존재하지 않습니다.");
    return <ErrorMessage text="올바른 접근이 아닙니다." />;
  }

  return <BoardDetail singleBoardId={singleBoardId} />;
};

export default BoardDetailPage;
