import PropTypes from "prop-types";
import {
  FaEye,
  FaInfo,
  FaExternalLinkAlt,
  FaStar,
  FaUtensils,
} from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="my-4 rounded bg-gpv-card py-6 px-6">
      <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-gpv-headline transition hover:text-gpv-button"
      >
        <h3 className="flex flex-row items-center">
          {name}
          <FaExternalLinkAlt className="ml-2" />
        </h3>
      </a>
      <p className="text-gpv-paragraph">{description}</p>
      <ul className="mt-2 flex flex-row items-center space-x-4">
        <li className="flex flex-row items-center rounded bg-gpv-tertiary px-2 py-1 text-xs font-semibold tracking-wide text-gpv-headline">
          <FaEye className="mr-1" />
          {watchers_count}
        </li>
        <li className="flex flex-row items-center rounded bg-gpv-tertiary px-2 py-1 text-xs font-semibold tracking-wide text-gpv-headline">
          <FaStar className="mr-1" />
          {stargazers_count}
        </li>
        <li className="flex flex-row items-center rounded bg-gpv-tertiary px-2 py-1 text-xs font-semibold tracking-wide text-gpv-headline">
          <FaInfo className="mr-1" />
          {open_issues}
        </li>
        <li className="flex flex-row items-center rounded bg-gpv-tertiary px-2 py-1 text-xs font-semibold tracking-wide text-gpv-headline">
          <FaUtensils className="mr-1" />
          {forks}
        </li>
      </ul>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
