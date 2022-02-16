import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="rounded bg-gpv-card py-8 px-6">
      <div className="flex flex-row items-center">
        <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-gpv-button shadow">
          <img src={avatar_url} alt={`${login} profile avatar.`} />
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-gpv-headline">{login}</h3>
          <Link
            className="text-xs font-semibold uppercase tracking-wide text-gpv-paragraph transition hover:text-gpv-button"
            to={`/users/${login}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
