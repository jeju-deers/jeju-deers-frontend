import { useQuery } from "@tanstack/react-query";
import { getSchedules } from "~/api/schedule";

export const useGetSchedules = () => {
  return useQuery({
    queryKey: ["gameSchedules"],
    queryFn: () => getSchedules(),
  });
};
