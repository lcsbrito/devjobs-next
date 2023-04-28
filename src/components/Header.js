"use client";

import React, { useState } from "react";
import styles from "../styles/header.module.css";

function Header({}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>devjobs</h1>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />

        <span></span>
      </label>
    </header>
  );
}

export default Header;
