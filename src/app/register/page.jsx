"use client";
import React, { useState, useContext } from "react";
import styles from "../styles/Register.module.css";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const userInfo = { email, password, name };
    registerUser(userInfo);
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.left}>
        <h1>
          Create <span>an</span> account
        </h1>
        <p>
          Sign back in into the most sophisticated authentication system in this
          world built in next
        </p>
      </div>
      <div className={styles.right}>
        <form>
          <h3>email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>full name</h3>
          <input
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>create account</button>
        </form>
        <hr />
        <div className={styles.login_container}>
          <p>Already have an account?</p>
          <p onClick={() => router.push("/login")}>log in</p>
        </div>
      </div>
    </main>
  );
};

export default Register;
