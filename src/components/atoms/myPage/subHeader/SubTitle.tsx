import { SubTitleSpan } from "./SubTitleStyles";

interface Props {
  text: string;
}

const SubTitle = ({ text }: Props) => {
  return <SubTitleSpan>{text}</SubTitleSpan>;
};

export default SubTitle;
