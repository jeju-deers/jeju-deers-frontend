import {
  CoachImage,
  CoachItemBox,
  CoachListBox,
  CoachListHeaderBox,
  CoachListRowBox,
} from "./CoachListStyles";

interface Props {
  coachlist: {
    id: number;
    image: string;
    name: string;
    position: string;
    birth: string;
    studentId: string;
    schoolOfOrigin: string;
  }[];
}

// TODO: [2024-07-03] 명단 데이터 불러오기 api 연결 후, 실제 데이터를 가지고 와야합니다
const CoachList = ({ coachlist }: Props) => {
  return (
    <CoachListBox>
      <CoachListHeaderBox>
        <CoachItemBox>코치</CoachItemBox>
        <CoachItemBox></CoachItemBox>
        <CoachItemBox>담당</CoachItemBox>
        <CoachItemBox>생년월일</CoachItemBox>
        <CoachItemBox>학번</CoachItemBox>
        <CoachItemBox>출신학교</CoachItemBox>
      </CoachListHeaderBox>
      {coachlist.map(({ id, image, name, position, birth, studentId, schoolOfOrigin }) => (
        <CoachListRowBox key={id}>
          <CoachItemBox>
            <CoachImage src={image} />
          </CoachItemBox>
          <CoachItemBox>{name}</CoachItemBox>
          <CoachItemBox>{position}</CoachItemBox>
          <CoachItemBox>{birth}</CoachItemBox>
          <CoachItemBox>{studentId}</CoachItemBox>
          <CoachItemBox>{schoolOfOrigin}</CoachItemBox>
        </CoachListRowBox>
      ))}
    </CoachListBox>
  );
};

export default CoachList;
