import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuth } from "../context/AuthContext";

const LogoutBtn = () => {
  const { handleResetAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const { mutate, data, isLoading } = useMutation({
    mutationFn: () => axiosPrivate.post("/oauth/logout"),
    onSuccess: () => {
      handleResetAuth();
    },
  });

  return (
    <button
      className="px-4 py-2 bg-blue-700 text-white rounded w-max hover:bg-blue-600 active:opacity-80 uppercase border border-blue-600 shadow"
      disabled={isLoading}
      onClick={() => mutate()}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
