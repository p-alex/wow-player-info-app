import { BiError } from 'react-icons/bi';
const ErrorMessage = ({ children }: { children: string }) => {
  return (
    <p className="flex items-center gap-2 p-2 bg-red-700 text-white w-max rounded-md">
      <BiError style={{ width: 20, height: 20 }} /> {children}
    </p>
  );
};

export default ErrorMessage;
