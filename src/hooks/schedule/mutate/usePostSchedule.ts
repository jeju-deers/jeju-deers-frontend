import { useMutation } from "@tanstack/react-query";
import { postSchedule } from "~/api/schedule";
import { GameScheduleData } from "~/api/types/schedule";

interface Props {
  token: string;
  id: string;
  date: string;
  location: string;
  homeTeam: string;
  homeScore: string;
  awayTeam: string;
  awayScore: string;
  isEditing: boolean;
}

const usePostSchedule = () => {
  const mutation = useMutation({
    mutationFn: ({
      id,
      date: datetime,
      location,
      homeTeam,
      homeScore,
      awayTeam,
      awayScore,
      isEditing,
      token,
    }: Props) =>
      postSchedule({
        id,
        date: datetime,
        location,
        homeTeam,
        homeScore,
        awayTeam,
        awayScore,
        isEditing,
        token,
      }),
    onSuccess: (data) => {
      console.log("경기일정 추가됨", data);
      alert("경기일정이 추가되었습니다!");
    },
    onError: (error: Error) => {
      console.error(`실패, error: ${error}`);
      console.dir(error);
    },
  });

  return mutation;
};

export default usePostSchedule;
