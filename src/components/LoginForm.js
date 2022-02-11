import React, { useContext, useState } from "react";
import { LoadContext } from "../contexts/Load";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { getUserByUsername } from "../utils/api";

function LoginForm() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userInput, setUserInput] = useState(currentUser.username);
  const { setIsLoading } = useContext(LoadContext);
  const onLoginSubmit = (event) => {
    event.preventDefault();
    // early return if inputted username already set to global
    // TODO: move logic to enable/disable submit
    if (userInput === currentUser.username) return;
    // if user exists then set context
    setIsLoading(true);
    getUserByUsername(userInput)
      .then((userObj) => {
        setCurrentUser(userObj);
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