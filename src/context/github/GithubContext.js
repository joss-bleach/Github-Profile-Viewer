import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const clearUsersFromState = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const fetchSearchedUsersFromGithub = async (searchInput) => {
    setLoading();
    const params = new URLSearchParams({
      q: searchInput,
    });
    const usersFromGithub = await fetch(
      `${GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const { items } = await usersFromGithub.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchSearchedUsersFromGithub,
        clearUsersFromState,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
