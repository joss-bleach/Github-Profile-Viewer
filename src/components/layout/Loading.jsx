import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex w-full flex-row justify-center py-12">
      <h1 className="animate-spin text-5xl text-gpv-button">
        <FaSpinner />
      </h1>
    </div>
  );
};

export default Loading;
