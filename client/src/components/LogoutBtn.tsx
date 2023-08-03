import { useMutation } from '@tanstack/react-query';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useAuth } from '../context/AuthContext';
import { BiLogOut } from 'react-icons/bi';
const LogoutBtn = () => {
  const { handleResetAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const { mutate, data, isLoading } = useMutation({
    mutationFn: () => axiosPrivate.post('/oauth/logout'),
    onSuccess: () => {
      handleResetAuth();
    },
  });

  return (
    <button className="flex items-center gap-2 p-1 w-max text-blue-500" disabled={isLoading} onClick={() => mutate()}>
      <BiLogOut style={{ width: 20, height: 20 }} /> <span>Logout</span>
    </button>
  );
};

export default LogoutBtn;
