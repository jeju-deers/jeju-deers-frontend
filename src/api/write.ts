import { instance } from ".";

interface PostWriteProps {
  title: string;
  content: string;
  type: string;
  owner: string;
  token: string;
}

export const postWrite = async ({ title, content, type, owner, token }: PostWriteProps) => {
  try {
    const response = await instance.post(
      "/boards",
      { title, content, type, owner },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  } catch (error: any) {
    console.error("postWrite에서 오류가 발생했습니다.", error.response || error.message);
    throw error;
  }
};
