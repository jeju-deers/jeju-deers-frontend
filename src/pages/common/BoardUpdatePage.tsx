import { useParams } from "react-router-dom";
import ErrorMessage from "~/common/components/atom/ErrorMessage";
import BoardUpdate from "~/common/components/templates/BoardUpdate";

const BoardUpdatePage = () => {
  const singleBoardId = useParams().id;

  if (!singleBoardId) {
    console.log("올바른 singleBoardId가 존재하지 않습니다.");
    return <ErrorMessage text="올바른 접근이 아닙니다." />;
  }

  return <BoardUpdate singleBoardId={singleBoardId} />;
};
export default BoardUpdatePage;
