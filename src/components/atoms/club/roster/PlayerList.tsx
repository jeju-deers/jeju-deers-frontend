import { useGetUsers } from "~/hooks/club/query/useGetUsers";
import PlayerImage from "./PlayerImage";
import { PlayerItem, PlayerListBox, PlayerListHeader, PlayerlistRow } from "./PlayerListStyles";
import profile from "~/assets/images/Profile.svg";
import PendingMessage from "~/common/components/atom/PendingMessage";
import ErrorMessage from "~/common/components/atom/ErrorMessage";

const PlayerList = () => {
  const { data: playerListData, isLoading, error } = useGetUsers("player");

  if (isLoading) {
    return <PendingMessage />;
  }

  if (error) {
    return <ErrorMessage text="에러" />;
  }

  if (!Array.isArray(playerListData) || playerListData.length === 0) {
    return <ErrorMessage text="선수 데이터가 없습니다." />;
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
      {playerListData.map(({ userId, name, backNumber, positions, birth, belong, joinYear }) => (
        <PlayerlistRow key={userId}>
          <PlayerItem>
            <PlayerImage src={profile} />
          </PlayerItem>
          <PlayerItem>{name}</PlayerItem>
          <PlayerItem>{backNumber}</PlayerItem>
          <PlayerItem>{positions}</PlayerItem>
          <PlayerItem>{birth}</PlayerItem>
          <PlayerItem>{belong}</PlayerItem>
          <PlayerItem>{joinYear}</PlayerItem>
        </PlayerlistRow>
      ))}
    </PlayerListBox>
  );
};

export default PlayerList;
