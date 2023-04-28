import React from "react";
import Link from "next/link";
import "../styles/globals.css";
import styles from "../styles/jobcard.module.css";

export default function JobCard(props) {
  return (
    <Link href={`/jobs/${props.id}`}>
      <div className={styles.jobcard}>
        <div
          style={{ backgroundColor: props.logoBackground }}
          className={styles.logocontainer}
        >
          <img src={props.logo} alt="" />
        </div>
        <div className="flexbetween">
          <span>
            <p>{props.postedAt}</p>
            <svg width="4" height="4">
              <circle cx="2" cy="2" r="2" style={{ fill: "gray" }} />
            </svg>
          </span>
          <p>{props.contract}</p>
        </div>
        <h3>{props.position}</h3>
        <p>{props.company}</p>
        <h3>{props.location}</h3>
      </div>
    </Link>
  );
}
