"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../styles/header.module.css";

function Header({}) {
  const [isChecked, setIsChecked] = useState(false);
  const { push } = useRouter();

  const handleCreate = () => {
    push("/create/job");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>devjobs</h1>
      <div className={styles.buttoncontainer}>
        <button onClick={handleCreate}>Create new</button>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />

          <span></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
