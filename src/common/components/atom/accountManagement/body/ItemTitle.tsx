import { EssentialMarkSpan, ItemTitleBox, ItemTitleLabel } from "./ItemTitleStyles";

interface Props {
  id?: string;
  text: string;
  required: boolean;
}

const ItemTitle = ({ id, text, required }: Props) => {
  return (
    <ItemTitleBox>
      {required && <EssentialMarkSpan>*</EssentialMarkSpan>}
      <ItemTitleLabel htmlFor={id}>{text}</ItemTitleLabel>
    </ItemTitleBox>
  );
};

export default ItemTitle;
