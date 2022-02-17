import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Context
import GithubContext from "../context/github/GithubContext";

// Components
import Loading from "../components/layout/Loading";
import RepoList from "../components/repos/RepoList";

const User = () => {
  const {
    fetchSingleUserFromGithub,
    user,
    loading,
    repos,
    fetchUserReposFromGithub,
  } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    fetchSingleUserFromGithub(params.login);
    fetchUserReposFromGithub(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="mx-auto max-w-prose pb-12">
        <div className="w-full py-8">
          <ul className="flex flex-row space-x-2 text-xs font-semibold uppercase">
            <li className="text-gpv-headline transition hover:text-gpv-button">
              <Link to="/">Users</Link>
            </li>
            <li className="text-gpv-headline">></li>
            <li className="text-gpv-paragraph">{user.login}</li>
          </ul>
        </div>
        <div className="flex w-full flex-col items-center rounded bg-gpv-card py-12 px-12 md:flex-row">
          <div>
            <div className="mb-8 h-52 w-52 rounded md:mb-0">
              <img
                src={avatar_url}
                className="rounded"
                alt={`${user.login}'s avatar.`}
              />
            </div>
          </div>
          <div className="pl-12">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gpv-headline">
                {user.login}
              </h1>
              <p className="text-gpv-paragraph">{user.bio}</p>
            </div>
            <a
              target="_blank"
              href={html_url}
              rel="noreferrer"
              className="flex h-12 w-64 cursor-pointer flex-row items-center justify-center rounded bg-gpv-button px-6 font-semibold text-gpv-headline transition hover:bg-gpv-hover"
            >
              View GitHub Profile <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
        <div className="my-8 flex w-full flex-row items-center rounded bg-gpv-card py-12 px-12">
          <div className="flex w-full flex-col justify-between space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center">
              <h5 className="flex flex-row items-center text-xs font-semibold uppercase tracking-wide text-gpv-paragraph">
                <FaUsers className="mr-2" />
                Followers
              </h5>
              <p className="text-headline text-3xl font-semibold text-gpv-headline">
                {followers}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="flex flex-row items-center text-xs font-semibold uppercase tracking-wide text-gpv-paragraph">
                <FaUserFriends className="mr-2" />
                Following
              </h5>
              <p className="text-headline text-3xl font-semibold text-gpv-headline">
                {following}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="flex flex-row items-center text-xs font-semibold uppercase tracking-wide text-gpv-paragraph">
                <FaCodepen className="mr-2" />
                Public Repos
              </h5>
              <p className="text-headline text-3xl font-semibold text-gpv-headline">
                {public_repos}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="flex flex-row items-center text-xs font-semibold uppercase tracking-wide text-gpv-paragraph">
                <FaStore className="mr-2" />
                Public Gists
              </h5>
              <p className="text-headline text-3xl font-semibold text-gpv-headline">
                {public_gists}
              </p>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    );
  }
};

export default User;
