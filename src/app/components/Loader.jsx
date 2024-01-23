"use client";
import React from "react";
import styles from "../styles/Loader.module.css";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.loader}>
        <SyncLoader color="#FCEADB" size={20} margin={5} />
        <p>loading</p>
      </div>
    </section>
  );
};

export default Loader;
