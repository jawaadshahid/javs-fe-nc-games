import React, { useContext } from "react";
import { UserContext } from "../contexts/User";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="siteheader">
      <h1 className="siteheader__title">Jav's NC Games</h1>
      <div className="siteheader__profile">
        <img src={user.avatar_url} alt={`${user.name} avatar`} />{" "}
        <span>{user.name}</span>
      </div>
    </header>
  );
}

export default Header;
