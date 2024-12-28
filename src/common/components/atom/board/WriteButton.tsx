import { Link } from "react-router-dom";
import { WriteButtonButton } from "./WriteButtonStyles";

const WriteButton = () => {
  const boardType = location.pathname.split("/").filter(Boolean).pop();
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  const canWrite = (() => {
    if (!token) return false;
    if (userType === "player" && (boardType === "coach_board" || boardType === "staff_board")) {
      return false;
    }
    if (userType === "external" && boardType !== "guest_board") {
      return false;
    }
    return true;
  })();

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
