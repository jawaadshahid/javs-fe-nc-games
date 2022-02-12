import { createContext, useEffect, useState } from "react";
import { getUsers } from "../utils/api";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({
    username: "jessjelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    name: "Jess Jelly",
  });

  useEffect(() => {
    getUsers()
      .then((users) =>
        setUsers(() => {
          return users.map((user) => {
            const newUser = { ...user };
            newUser.active = false;
            return newUser;
          });
        })
      )
      .catch((msg) => console.log(msg));
  }, []);

  return (
    <UsersContext.Provider value={{ users, activeUser, setActiveUser }}>
      {children}
    </UsersContext.Provider>
  );
};
