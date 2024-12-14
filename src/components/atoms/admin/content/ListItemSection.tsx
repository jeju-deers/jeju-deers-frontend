import { ListItemTextSpan, ListSectionBox } from "./ListItemSectionStyles";

interface Props {
  basis: string;
  text: string;
}

const ListItemSection = ({ basis, text }: Props) => {
  return (
    <ListSectionBox basis={basis}>
      <ListItemTextSpan>{text}</ListItemTextSpan>
    </ListSectionBox>
  );
};

export default ListItemSection;
