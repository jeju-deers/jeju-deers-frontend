import { useGetUsers } from "~/hooks/club/query/useGetUsers";
import {
  CoachImage,
  CoachItemBox,
  CoachListBox,
  CoachListHeaderBox,
  CoachListRowBox,
} from "./CoachListStyles";
import profile from "~/assets/images/profile.svg";

const CoachList = () => {
  const { data: coachListData, isLoading, error } = useGetUsers("coach");
  console.log(coachListData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching the coach data.</div>;
  }

  if (!Array.isArray(coachListData) || coachListData.length === 0) {
    return <div>코치 데이터가 없습니다</div>;
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
