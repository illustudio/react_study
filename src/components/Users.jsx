import { useState, useEffect } from "react";
import "./user.css"

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const getData = await fetch("https://randomuser.me/api/?results=10");
    const userData = await getData.json();
    setUsers(userData.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log(users);
  }, []);

  if (loading) return <h1>loading...</h1>;

  return (
    <>
      {users &&
        users.map((user) => (
          <div key={user.login.uuid} className="user">
            <img src={user.picture.large} alt={user.name.first} />
            <p>
              {user.name.first}, {user.name.last}
            </p>
          </div>
        ))}
    </>
  );
};

export default Users;
