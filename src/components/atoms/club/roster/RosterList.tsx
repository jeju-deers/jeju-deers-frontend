import { useGetUsers } from "~/hooks/club/useGetUsers";
import RosterImage from "./RosterImage";
import { RosterItem, RosterListBox, RosterListHeader, RosterlistRow } from "./RosterListStyles";
import profile from "~/assets/images/Profile.svg";

const RosterList = () => {
  const { data: playerListData, isLoading, error } = useGetUsers("player");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching the roster data.</div>;
  }

  if (!Array.isArray(playerListData) || playerListData.length === 0) {
    return <div>선수 데이터가 없습니다</div>;
  }

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
      {playerListData.map(({ userId, name, backNumber, positions, birth, belong, join }) => (
        <RosterlistRow key={userId}>
          <RosterItem>
            <RosterImage src={profile} />
          </RosterItem>
          <RosterItem>{name}</RosterItem>
          <RosterItem>{backNumber}</RosterItem>
          <RosterItem>{positions}</RosterItem>
          <RosterItem>{birth}</RosterItem>
          <RosterItem>{belong}</RosterItem>
          <RosterItem>{join}</RosterItem>
        </RosterlistRow>
      ))}
    </RosterListBox>
  );
};

export default RosterList;
