import PropTypes from "prop-types";

// Components
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gpv-headline">
        Latest public repositories
      </h2>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
