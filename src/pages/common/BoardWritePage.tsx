import { useParams } from "react-router-dom";
import ErrorMessage from "~/common/components/atom/ErrorMessage";
import BoardWrite from "~/common/components/templates/BoardWrite";

const BoardWritePage = () => {
  const { section } = useParams();

  if (!section) {
    console.log("올바른 section이 존재하지 않습니다.");
    return <ErrorMessage text="올바른 접근이 아닙니다." />;
  }

  return <BoardWrite section={section} />;
};
export default BoardWritePage;
