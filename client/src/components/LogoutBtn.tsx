import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { resetUser } from "../app/features/auth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const { mutate, data, isLoading } = useMutation({
    mutationFn: () => axiosPrivate.post("/oauth/logout"),
    onSuccess: () => {
      dispatch(resetUser());
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
