"use client";
import React from "react";
import styles from "./styles/Home.module.css";
import PrivateRoutes from "./utils/PrivateRoutes";

const Home = () => {
  return (
    <PrivateRoutes>
      <main className={styles.wrapper}>Welcome to Auth</main>;
    </PrivateRoutes>
  );
};

export default Home;
