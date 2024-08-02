import {
  StaffImage,
  StaffItemBox,
  StaffListBox,
  StaffListHeaderBox,
  StaffListRowBox,
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
      <StaffListHeaderBox>
        <StaffItemBox>스태프</StaffItemBox>
        <StaffItemBox></StaffItemBox>
        <StaffItemBox>담당</StaffItemBox>
        <StaffItemBox>생년월일</StaffItemBox>
        <StaffItemBox>입단년도</StaffItemBox>
      </StaffListHeaderBox>
      {stafflist.map(({ id, image, name, position, birth, join }) => (
        <StaffListRowBox key={id}>
          <StaffItemBox>
            <StaffImage src={image} />
          </StaffItemBox>
          <StaffItemBox>{name}</StaffItemBox>
          <StaffItemBox>{position}</StaffItemBox>
          <StaffItemBox>{birth}</StaffItemBox>
          <StaffItemBox>{join}</StaffItemBox>
        </StaffListRowBox>
      ))}
    </StaffListBox>
  );
};

export default StaffList;
