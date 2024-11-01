import { useGetUsers } from "~/hooks/club/query/useGetUsers";
import {
  CoachImage,
  CoachItemBox,
  CoachListBox,
  CoachListHeaderBox,
  CoachListRowBox,
} from "./CoachListStyles";
import profile from "~/assets/images/Profile.svg";
import PendingMessage from "~/common/components/atom/PendingMessage";
import ErrorMessage from "~/common/components/atom/ErrorMessage";

const CoachList = () => {
  const { data: coachListData, isLoading, error } = useGetUsers("coach");

  if (isLoading) {
    return <PendingMessage />;
  }

  if (error) {
    return <ErrorMessage text="에러" />;
  }

  if (!Array.isArray(coachListData) || coachListData.length === 0) {
    return <ErrorMessage text="코치 데이터가 없습니다." />;
  }

  return (
    <CoachListBox>
      <CoachListHeaderBox>
        <CoachItemBox>코치 및 스태프</CoachItemBox>
        <CoachItemBox></CoachItemBox>
        <CoachItemBox>담당</CoachItemBox>
        <CoachItemBox>생년월일</CoachItemBox>
        <CoachItemBox>학번</CoachItemBox>
        <CoachItemBox>출신학교</CoachItemBox>
      </CoachListHeaderBox>
      {coachListData.map(({ userId, name, positions, birth, studentId, school }) => (
        <CoachListRowBox key={userId}>
          <CoachItemBox>
            <CoachImage src={profile} />
          </CoachItemBox>
          <CoachItemBox>{name}</CoachItemBox>
          <CoachItemBox>{positions}</CoachItemBox>
          <CoachItemBox>{birth}</CoachItemBox>
          <CoachItemBox>{studentId}</CoachItemBox>
          <CoachItemBox>{school}</CoachItemBox>
        </CoachListRowBox>
      ))}
    </CoachListBox>
  );
};

export default CoachList;
