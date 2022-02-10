import React, { useContext, useState } from "react";
import { LoadContext } from "../contexts/Load";
import { UserContext } from "../contexts/User";
import { getUserByUsername } from "../utils/api";

function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const [userInput, setUserInput] = useState(user.username);
  const { setIsLoading } = useContext(LoadContext);
  const onLoginSubmit = (event) => {
    event.preventDefault();
    // early return if inputted username already set to global
    // TODO: move logic to enable/disable submit
    if (userInput === user.username) return;
    // if user exists then set context
    setIsLoading(true);
    getUserByUsername(userInput)
      .then((userObj) => {
        setUser(userObj);
        setIsLoading(false);
      })
      .catch((msg) => {
        // TODO: handle error
        console.log(msg);
        setIsLoading(false);
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

export default LoginForm;