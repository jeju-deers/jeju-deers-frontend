import { Link } from "react-router-dom";
import { WriteButtonButton } from "./WriteButtonStyles";

const WriteButton = () => {
  return (
    <WriteButtonButton>
      <Link to="./write">글쓰기</Link>
    </WriteButtonButton>
  );
};

export default WriteButton;
