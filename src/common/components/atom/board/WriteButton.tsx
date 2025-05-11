import { Link } from "react-router-dom";
import { WriteButtonButton } from "./WriteButtonStyles";

const WriteButton = () => {
  const boardType = location.pathname.split("/").filter(Boolean).pop();
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  const canWrite =
    token &&
    !(userType === "player" && (boardType === "coach_board" || boardType === "staff_board")) &&
    !(userType === "external" && boardType !== "guest_board");

  if (!canWrite) {
    return null;
  }

  return (
    <WriteButtonButton>
      <Link to="./write">글쓰기</Link>
    </WriteButtonButton>
  );
};

export default WriteButton;
