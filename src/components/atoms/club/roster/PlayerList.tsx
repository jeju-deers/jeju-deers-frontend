import { useGetUsers } from "~/hooks/club/query/useGetUsers";
import PlayerImage from "./PlayerImage";
import { PlayerItem, PlayerListBox, PlayerListHeader, PlayerlistRow } from "./PlayerListStyles";
import profile from "~/assets/images/profile.svg";

const PlayerList = () => {
  const { data: playerListData, isLoading, error } = useGetUsers("player");
  console.log(playerListData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching the Player data.</div>;
  }

  if (!Array.isArray(playerListData) || playerListData.length === 0) {
    return <div>선수 데이터가 없습니다</div>;
  }

  return (
    <PlayerListBox>
      <PlayerListHeader>
        <PlayerItem>선수</PlayerItem>
        <PlayerItem></PlayerItem>
        <PlayerItem>백넘버</PlayerItem>
        <PlayerItem>포지션</PlayerItem>
        <PlayerItem>생년월일</PlayerItem>
        <PlayerItem>소속</PlayerItem>
        <PlayerItem>입단년도</PlayerItem>
      </PlayerListHeader>
      {playerListData.map(({ userId, name, backNumber, positions, birth, belong, join }) => (
        <PlayerlistRow key={userId}>
          <PlayerItem>
            <PlayerImage src={profile} />
          </PlayerItem>
          <PlayerItem>{name}</PlayerItem>
          <PlayerItem>{backNumber}</PlayerItem>
          <PlayerItem>{positions}</PlayerItem>
          <PlayerItem>{birth}</PlayerItem>
          <PlayerItem>{belong}</PlayerItem>
          <PlayerItem>{join}</PlayerItem>
        </PlayerlistRow>
      ))}
    </PlayerListBox>
  );
};

export default PlayerList;
