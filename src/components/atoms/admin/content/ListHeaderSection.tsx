import { ListHeaderSectionBox, ListHeaderTextSpan } from "./ListHeaderSectionStyles";

interface Props {
  basis: string;
  text: string;
}

const ListHeaderSection = ({ basis, text }: Props) => {
  return (
    <ListHeaderSectionBox basis={basis}>
      <ListHeaderTextSpan>{text}</ListHeaderTextSpan>
    </ListHeaderSectionBox>
  );
};

export default ListHeaderSection;
