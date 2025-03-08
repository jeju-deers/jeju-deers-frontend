import { useMutation } from "@tanstack/react-query";
import { postSchedule } from "~/api/schedule";
import { GameScheduleData } from "~/api/types/schedule";

const usePostSchedule = () => {
  return useMutation({
    mutationFn: (schedule: GameScheduleData) => postSchedule(schedule),
    onSuccess: (data) => {
      console.log("경기일정 추가됨", data);
    },
    onError: (error: Error) => {
      console.error(`추가 실패: ${error.message}`);
      console.dir(error);
    },
  });
};

export default usePostSchedule;
