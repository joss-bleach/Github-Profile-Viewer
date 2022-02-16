import { useContext } from "react";
import { FaExclamationCircle } from "react-icons/fa";

// Context
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="my-4 w-96 rounded border-2 border-red-700 bg-red-100 p-4 md:w-100">
        <h3 className="flex flex-row items-center font-semibold text-red-700">
          <FaExclamationCircle className="mr-4" />
          {alert.msg}
        </h3>
      </div>
    )
  );
};

export default Alert;
