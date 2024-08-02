import RosterImage from "./RosterImage";
import { RosterItem, RosterListBox, RosterListHeader, RosterlistRow } from "./RosterListStyles";
import axios, { AxiosResponse, AxiosError } from "axios";
import rosterImage from "~/assets/images/Roster.svg";

// TODO: [2024-07-03] 명단 데이터 불러오기 api 연결 후, 실제 데이터를 가지고 와야합니다
const RosterList = () => {
  const [rosterlist, setRosterlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRosterData = async () => {
      try {
        const response: AxiosResponse = await axios.get("https://jeju-deers-backend.fly.dev/users");
        console.log(response.data);
        setRosterlist(response.data);
      } catch (error: AxiosError | any) {
        setError("Error fetching the roster data.");
        console.error("Error fetching the data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRosterData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
      {rosterlist.map(({ userId, name, backNumber, positions, birth, belong, join }) => (
        <RosterlistRow key={userId}>
          <RosterItem>
            <RosterImage src={rosterImage} />
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

import { useState, useEffect } from "react";
