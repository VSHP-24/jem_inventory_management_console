import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteUser as deleteUserApi } from "../../services/apiUsers";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserApi,

    onSuccess: () => {
      toast.success(` User successfully deleted `);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteUser };
}
