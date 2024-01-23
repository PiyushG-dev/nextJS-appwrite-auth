"use client";
import React, { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>auth</h1>
      <div className={styles.navigation}>
        <Link
          style={{ display: user ? "block" : "none" }}
          className={`link ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`link ${pathname === "/login" ? "active" : ""}`}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={`link ${pathname === "/register" ? "active" : ""}`}
          href="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
