import { ListItemSectionBox, ListItemTextSpan } from "./ListItemSectionStyles";

interface Props {
  basis: string;
  text: string;
}

const ListItemSection = ({ basis, text }: Props) => {
  return (
    <ListItemSectionBox basis={basis}>
      <ListItemTextSpan>{text}</ListItemTextSpan>
    </ListItemSectionBox>
  );
};

export default ListItemSection;
