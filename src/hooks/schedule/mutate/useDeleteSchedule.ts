import { useMutation } from "@tanstack/react-query";
import { deleteSchedule } from "~/api/schedule";

const useDeleteSchedule = () => {
  return useMutation({
    mutationFn: (id: string) => deleteSchedule(id),
    onSuccess: () => {
      console.log("경기일정 삭제됨");
      alert("경기일정이 삭제되었습니다!");
    },
    onError: (error: Error) => {
      console.error(`삭제 실패: ${error.message}`);
    },
  });
};

export default useDeleteSchedule;
