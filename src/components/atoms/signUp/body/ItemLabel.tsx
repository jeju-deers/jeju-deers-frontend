import { ItemLabelLabel } from "./ItemLabelStyles";

interface Props {
  id?: string;
  text: string;
}

const ItemLabel = ({ id, text }: Props) => {
  return <ItemLabelLabel htmlFor={id}>{text}</ItemLabelLabel>;
};

export default ItemLabel;
