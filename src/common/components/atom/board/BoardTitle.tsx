import { BoardTitleSpan } from "./BoardTitleStyles";

interface Props {
  text: string;
}

const BoardTitle = ({ text }: Props) => {
  return <BoardTitleSpan>{text}</BoardTitleSpan>;
};

export default BoardTitle;
