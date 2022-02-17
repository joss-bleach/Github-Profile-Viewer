import { useState, useContext } from "react";
import { FaMinusCircle } from "react-icons/fa";

// Context
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const [formInput, setFormInput] = useState("");
  const { users, fetchSearchedUsersFromGithub, clearUsersFromState } =
    useContext(GithubContext);
  const { setNewAlert } = useContext(AlertContext);

  const handleOnChange = (e) => setFormInput(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formInput === "") {
      setNewAlert("Please enter something", "error");
    } else {
      fetchSearchedUsersFromGithub(formInput);
      setFormInput("");
    }
  };

  const handleOnClearUsers = () => {
    clearUsersFromState();
    setFormInput("");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gpv-headline md:text-4xl">
        Search GitHub profiles
      </h1>
      <p className="text-gpv-paragraph">
        Look up GitHub profiles below to learn more.
      </p>
      <div className="mt-6 flex w-full flex-col items-center justify-center md:flex-row md:justify-start">
        <form className="w-full" onSubmit={handleOnSubmit}>
          <input
            placeholder="Search..."
            className="h-12 w-full rounded bg-gpv-paragraph p-6 font-semibold text-gpv-background ring-gpv-button placeholder:font-light placeholder:text-gpv-background focus:outline-none focus:ring-2 md:w-96"
            type="text"
            value={formInput}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="ml:0 mt-4 h-12 w-full rounded bg-gpv-button font-semibold text-white transition hover:bg-gpv-hover md:mt-0 md:ml-4 md:w-40"
          >
            Search
          </button>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <p
            onClick={handleOnClearUsers}
            className="my-6 flex cursor-pointer flex-row items-center text-xs font-semibold uppercase tracking-wide text-red-400"
          >
            <FaMinusCircle className="mr-2" />
            Clear results
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
