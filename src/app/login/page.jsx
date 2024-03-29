"use client";
import React, { useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { loginUser, notify } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const userInfo = { email, password };
    if (email && password) {
      loginUser(userInfo);
    } else {
      notify("🥸 fill all the spaces, duh?");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.left}>
        <p>log in</p>
        <h1>Welcome Back</h1>
        <p>
          Sign back in into the most sophisticated authentication system in this
          world built in next
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.right_container}>
          <h2>your account</h2>
          <form>
            <h3>email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>login</button>
          </form>
          <hr />
          <div className={styles.register_container}>
            <p>don't have an account?</p>
            <p onClick={() => router.push("/register")}>register</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
