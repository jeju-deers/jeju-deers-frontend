import { useParams } from "react-router-dom";
import BoardUpdate from "~/common/components/templates/BoardUpdate";
import { useState } from "react";

const BoardUpdatePage = () => {
  const { section } = useParams();
  const [writeOption, setWriteOption] = useState(section || "");

  return <BoardUpdate writeOption={writeOption} setWriteOption={setWriteOption} />;
};
export default BoardUpdatePage;
