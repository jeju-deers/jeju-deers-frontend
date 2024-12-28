import { useParams } from "react-router-dom";
import BoardWrite from "~/common/components/templates/BoardWrite";
import { useState } from "react";

const BoardWritePage = () => {
  const { section } = useParams();
  const [writeOption, setWriteOption] = useState(section || "");

  return <BoardWrite writeOption={writeOption} setWriteOption={setWriteOption} />;
};
export default BoardWritePage;
