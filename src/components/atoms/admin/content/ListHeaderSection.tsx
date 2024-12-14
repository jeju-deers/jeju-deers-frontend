import { ListHeaderTextSpan, ListSectionBox } from "./ListHeaderSectionStyles";

interface Props {
  basis: string;
  text: string;
}

const ListHeaderSection = ({ basis, text }: Props) => {
  return (
    <ListSectionBox basis={basis}>
      <ListHeaderTextSpan>{text}</ListHeaderTextSpan>
    </ListSectionBox>
  );
};

export default ListHeaderSection;
