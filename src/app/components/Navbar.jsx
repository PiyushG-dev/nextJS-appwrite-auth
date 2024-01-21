"use client";
import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>auth</h1>
      <div className={styles.navigation}>
        <Link className={styles.link} href="/">
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
