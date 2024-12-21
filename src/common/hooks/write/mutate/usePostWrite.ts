import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { postWrite } from "~/api/write";
interface Props {
  title: string;
  content: string;
  type: string;
  owner: string;
  token: string;
}
const usePostWrite = () => {
  const mutation = useMutation({
    mutationFn: ({ title, content, type, owner, token }: Props) =>
      postWrite({ title, content, type, owner, token }),
    onSuccess: () => {
      console.log(`글쓰기 성공`);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.error("저장하는 도중 오류가 생겼습니다.", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    },
  });
  return mutation;
};
export default usePostWrite;
