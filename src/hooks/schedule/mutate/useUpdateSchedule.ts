import { useMutation } from "@tanstack/react-query";
import { updateSchedule } from "~/api/schedule";
import { GameScheduleData } from "~/api/types/schedule";

const useUpdateSchedule = () => {
  return useMutation({
    mutationFn: (schedule: GameScheduleData) => updateSchedule(schedule),
    onSuccess: (data) => {
      console.log("경기일정 수정됨", data);
    },
    onError: (error: Error) => {
      console.error(`수정 실패: ${error.message}`);
    },
  });
};

export default useUpdateSchedule;
