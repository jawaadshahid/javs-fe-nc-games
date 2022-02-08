import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUserByUsername } from "../utils/api";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const [userInput, setUserInput] = useState(user.username);
  const onLoginSubmit = (event) => {
    event.preventDefault();
    // if user exists then set context
    getUserByUsername(userInput)
      .then((userObj) => {
        setUser(userObj);
      })
      .catch((msg) => {
        // TODO: handle error
        console.log(msg);
      });
  };
  const onInputChange = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <form onSubmit={onLoginSubmit}>
      <h3>Login</h3>
      <label>
        <span>username:</span>
        <input type="input" onChange={onInputChange} value={userInput} />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
