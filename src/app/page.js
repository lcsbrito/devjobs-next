"use client";

import { useState } from "react";
import "../styles/globals.css";
import styles from "@/styles/home.module.css";
import ListJobs from "@/components/ListJobs";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchActive, setSearchActive] = useState(1);
  return (
    <main className={styles.main}>
      <SearchBar setJobs={setJobs} setSearchActive={setSearchActive} />
      <div className={styles.jobcontainer}>
        <ListJobs jobs={jobs} setJobs={setJobs} searchActive={searchActive} />
      </div>
    </main>
  );
}
