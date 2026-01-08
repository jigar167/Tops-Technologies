import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";

const auth = getAuth(app);

function UserAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => setMessage("Login Successful"))
      .catch((err) => setMessage(err.message));
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => setMessage("Signup Successful"))
      .catch((err) => setMessage(err.message));
  };

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid blue" }}>
      <h2>User Authentication</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: "5px" }}
      />{" "}
      <br />
      <button onClick={handleLogin} style={{ marginTop: "5px" }}>
        Login
      </button>
      <button onClick={handleSignup} style={{ marginLeft: "10px", marginTop: "5px" }}>
        Signup
      </button>
      <p>{message}</p>
    </div>
  );
}

export default UserAuth;
