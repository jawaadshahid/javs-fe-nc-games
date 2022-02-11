import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUser";

function Header() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="siteheader">
      <h1 className="siteheader__title">Jav's NC Games</h1>
      <div className="siteheader__profile">
        <img src={currentUser.avatar_url} alt={`${currentUser.name} avatar`} />{" "}
        <span>{currentUser.name}</span>
      </div>
    </header>
  );
}

export default Header;
