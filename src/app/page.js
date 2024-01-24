"use client";
import React, { useContext } from "react";
import styles from "./styles/Home.module.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthContext } from "./context/AuthContext";

const Home = () => {
  const { logoutUser } = useContext(AuthContext);
  return (
    <PrivateRoutes>
      <main className={styles.wrapper}>
        <h1>Welcome to Auth</h1>
        <button onClick={logoutUser}>logout</button>
      </main>
    </PrivateRoutes>
  );
};

export default Home;
