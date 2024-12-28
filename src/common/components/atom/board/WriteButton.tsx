import { Link } from "react-router-dom";
import { WriteButtonButton } from "./WriteButtonStyles";

const WriteButton = () => {
  const handleClickWriteButton = (event: React.MouseEvent) => {
    const token = localStorage.getItem("token");

    if (!token) {
      event.preventDefault();
      alert("로그인 이후 가능한 기능입니다.");
      return;
    }
  };

  return (
    <WriteButtonButton>
      <Link to="./write" onClick={handleClickWriteButton}>
        글쓰기
      </Link>
    </WriteButtonButton>
  );
};

export default WriteButton;
