import { useParams } from "react-router-dom";
import BoardWrite from "~/common/components/templates/BoardWrite";

const BoardWritePage = () => {
  const { section } = useParams();

  return <BoardWrite section={section} />;
};
export default BoardWritePage;
