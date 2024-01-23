"use client";
import React, { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>auth</h1>
      <div className={styles.navigation}>
        <Link
          style={{ display: user ? "block" : "none" }}
          className={styles.link}
          href="/"
        >
          Home
        </Link>
        <Link className={styles.link} href="/login">
          Login
        </Link>
        <Link className={styles.link} href="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
