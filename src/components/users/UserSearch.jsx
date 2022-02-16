import { useState, useContext } from "react";
import { FaMinusCircle } from "react-icons/fa";

// Context
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const [formInput, setFormInput] = useState("");
  const { users, fetchSearchedUsersFromGithub, clearUsersFromState } =
    useContext(GithubContext);

  const handleOnChange = (e) => setFormInput(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formInput === "") {
      window.alert("Please enter something.");
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
      <div className="mt-6 flex flex-col items-center justify-center md:flex-row md:justify-start">
        <form onSubmit={handleOnSubmit}>
          <input
            placeholder="Search..."
            className="h-12 w-96 rounded bg-gpv-paragraph p-6 font-semibold text-gpv-background ring-gpv-button placeholder:font-light placeholder:text-gpv-background focus:outline-none focus:ring-2"
            type="text"
            value={formInput}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="ml:0 mt-4 h-12 w-96 rounded bg-gpv-button font-semibold text-white md:mt-0 md:ml-4 md:w-40"
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
            Clear users
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
