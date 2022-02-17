import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const fetchSearchedUsersFromGithub = async (searchInput) => {
  const params = new URLSearchParams({
    q: searchInput,
  });
  const usersFromGithub = await githubApi.get(`/search/users?${params}`);
  return usersFromGithub.data.items;
};

export const fetchSingleUserAndReposFromGithub = async (login) => {
  const [user, repos] = await Promise.all([
    githubApi.get(`/users/${login}`),
    githubApi.get(`/users/${login}/repos`),
  ]);
  return {
    user: user.data,
    repos: repos.data,
  };
};
