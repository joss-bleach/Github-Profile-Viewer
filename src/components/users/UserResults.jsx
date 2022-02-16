import { useContext } from "react";

// Context
import GithubContext from "../../context/github/GithubContext";

// Components
import Loading from "../layout/Loading";
import UserItem from "./UserItem";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default UserResults;
