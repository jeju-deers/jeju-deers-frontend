import {
  CoachImage,
  CoachItem,
  CoachListBox,
  CoachListHeader,
  CoachlistRow,
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
      <CoachListHeader>
        <CoachItem>코치</CoachItem>
        <CoachItem></CoachItem>
        <CoachItem>담당</CoachItem>
        <CoachItem>생년월일</CoachItem>
        <CoachItem>학번</CoachItem>
        <CoachItem>출신학교</CoachItem>
      </CoachListHeader>
      {coachlist.map(({ id, image, name, position, birth, studentId, schoolOfOrigin }) => (
        <CoachlistRow key={id}>
          <CoachItem>
            <CoachImage src={image} />
          </CoachItem>
          <CoachItem>{name}</CoachItem>
          <CoachItem>{position}</CoachItem>
          <CoachItem>{birth}</CoachItem>
          <CoachItem>{studentId}</CoachItem>
          <CoachItem>{schoolOfOrigin}</CoachItem>
        </CoachlistRow>
      ))}
    </CoachListBox>
  );
};

export default CoachList;
