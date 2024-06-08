import { ItemConditionSpan } from "./ItemConditionStyles";

interface Props {
  text: string;
}

const ItemCondition = ({ text }: Props) => {
  return <ItemConditionSpan>{text}</ItemConditionSpan>;
};

export default ItemCondition;
