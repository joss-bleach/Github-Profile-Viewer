import { useEffect, useState } from "react";

// Components
import Loading from "../layout/Loading";
import UserItem from "./UserItem";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsersFromGithub = async () => {
    const usersFromGithub = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await usersFromGithub.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsersFromGithub();
  }, []);

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
