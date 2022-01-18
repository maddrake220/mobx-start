import { useEffect } from "react";

const UserList = ({ getUsers, users }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
