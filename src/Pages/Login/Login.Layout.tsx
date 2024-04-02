import React, { ReactElement, useContext, useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const Login = ({ closeHandler }) => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const { onSaveSession } = useAuth();
  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Call API
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        //creds
        username: creds.username,
        password: creds.password,
        expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => onSaveSession(data));
    // Get Reponse
    // If response is right then call context onSaveSession
    // onSaveSession(data)

    // Now Close modal & automatically everyone will be re-rendered
    closeHandler();
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreds((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form>
      <label>Email</label>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={creds.username}
        onChange={(e) => onInputChange(e)}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={creds.password}
        onChange={(e) => onInputChange(e)}
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};

export default Login;
