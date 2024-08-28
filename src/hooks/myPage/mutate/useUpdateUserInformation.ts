import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserInformationProps } from "~/api/types/users";
import { getUserInformation, updateUserInformation } from "~/api/users";

const useUpdateUserInformation = (userId: string, token: string | null) => {
  const objectInformation = {
    userId: userId,
    token: token,
  };

  const mutation = useMutation({
    mutationFn: ({ userInformation }: GetUserInformationProps) => {
      return updateUserInformation(objectInformation, {
        userInformation,
      });
    },
    onSuccess: () => {},
  });

  return mutation;
};

export default useUpdateUserInformation;
