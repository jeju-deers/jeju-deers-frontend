import {
  StaffImage,
  StaffItem,
  StaffListBox,
  StaffListHeader,
  StafflistRow,
} from "./StaffListStyles";

interface Props {
  stafflist: {
    id: number;
    image: string;
    name: string;
    position: string;
    birth: string;
    join: string;
  }[];
}

// TODO: [2024-07-03] 명단 데이터 불러오기 api 연결 후, 실제 데이터를 가지고 와야합니다
const StaffList = ({ stafflist }: Props) => {
  return (
    <StaffListBox>
      <StaffListHeader>
        <StaffItem>스태프</StaffItem>
        <StaffItem></StaffItem>
        <StaffItem>담당</StaffItem>
        <StaffItem>생년월일</StaffItem>
        <StaffItem>입단년도</StaffItem>
      </StaffListHeader>
      {stafflist.map(({ id, image, name, position, birth, join }) => (
        <StafflistRow key={id}>
          <StaffItem>
            <StaffImage src={image} />
          </StaffItem>
          <StaffItem>{name}</StaffItem>
          <StaffItem>{position}</StaffItem>
          <StaffItem>{birth}</StaffItem>
          <StaffItem>{join}</StaffItem>
        </StafflistRow>
      ))}
    </StaffListBox>
  );
};

export default StaffList;
