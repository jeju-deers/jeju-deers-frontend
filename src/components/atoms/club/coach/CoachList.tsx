import { useEffect, useState } from "react";
import {
  CoachImage,
  CoachItemBox,
  CoachListBox,
  CoachListHeaderBox,
  CoachListRowBox,
} from "./CoachListStyles";
import axios, { AxiosError, AxiosResponse } from "axios";
import profile from "~/assets/images/Profile.svg";

const CoachList = () => {
  const [coachList, setCoachList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoachData = async () => {
      try {
        const response: AxiosResponse = await axios.get("https://jeju-deers-backend.fly.dev/users");
        const coaches = response.data.filter((player: any) => player.userType === "coach");
        console.log(coaches);
        setCoachList(coaches);
      } catch (error: AxiosError | any) {
        setError("Error fetching the roster data.");
        console.error("Error fetching the data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoachData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
      {coachList.map(({ userId, name, positions, birth, studentId, school }) => (
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
