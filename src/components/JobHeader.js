"use client";

import styles from "@/styles/jobtitle.module.css";
import deleteJob from "@/requests/deleteJob";
import truncateURL from "@/utils/truncateURL";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function JobHeader({ job }) {
  const { push } = useRouter();
  const { _id: id } = job;

  const handleDelete = async () => {
    try {
      await deleteJob(id);
      push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    push(`update/job/${id}`);
  };

  return (
    <div className={styles.containerjobtitle}>
      <div className={styles.jobtitle}>
        <div
          style={{ backgroundColor: job.logoBackground }}
          className={styles.logocontainer}
        >
          <img src={job.logo} alt="" />
        </div>
        <span>
          <h2 className="job-title">{job.company}</h2>
          <p>{truncateURL(job.website)}</p>
        </span>
      </div>
      <div className={styles.buttoncontainer}>
        <button className="button-secondary" onClick={handleUpdate}>
          Edit Job
        </button>
        <button className={styles.btndelete} onClick={handleDelete}>
          Delete Offer
        </button>
        <a href={job.website}>
          <button className={styles.btncompanysite}>Company Site</button>
        </a>
      </div>
    </div>
  );
}
