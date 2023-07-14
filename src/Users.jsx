import { useState, useEffect } from "react";
import { getUsersUrl } from "./URL";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = getUsersUrl();
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      {users.map((user, index) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default Users;
