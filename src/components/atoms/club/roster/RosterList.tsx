import RosterImage from "./RosterImage";
import { RosterItem, RosterListBox, RosterListHeader, RosterlistRow } from "./RosterListStyles";

interface Props {
  rosterlist: {
    id: number;
    image: string;
    name: string;
    number: string;
    position: string;
    birth: string;
    belong: string;
    join: string;
  }[];
}

const RosterList = ({ rosterlist }: Props) => {
  return (
    <RosterListBox>
      <RosterListHeader>
        <RosterItem>선수</RosterItem>
        <RosterItem></RosterItem>
        <RosterItem>백넘버</RosterItem>
        <RosterItem>포지션</RosterItem>
        <RosterItem>생년월일</RosterItem>
        <RosterItem>소속</RosterItem>
        <RosterItem>입단년도</RosterItem>
      </RosterListHeader>
      {rosterlist.map(({ id, image, name, number, position, birth, belong, join }) => (
        <RosterlistRow key={id}>
          <RosterItem>
            <RosterImage src={image} />
          </RosterItem>
          <RosterItem>{name}</RosterItem>
          <RosterItem>{number}</RosterItem>
          <RosterItem>{position}</RosterItem>
          <RosterItem>{birth}</RosterItem>
          <RosterItem>{belong}</RosterItem>
          <RosterItem>{join}</RosterItem>
        </RosterlistRow>
      ))}
    </RosterListBox>
  );
};

export default RosterList;
