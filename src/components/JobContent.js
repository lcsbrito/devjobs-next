import styles from "@/styles/jobcontent.module.css";
import timeElapsed from "@/utils/timeElapsed";

export default function JobContent({ job }) {
  return (
    <div className={styles.jobcontent}>
      <div>
        <div className={styles.flextitle}>
          <div className={styles.flex}>
            <p>{timeElapsed(job.postedAt)}</p>
            <svg width="4" height="4">
              <circle cx="2" cy="2" r="2" style={{ fill: "gray" }} />
            </svg>
            <p>{job.contract}</p>
          </div>
          <div className={styles.flexbetween}>
            <h1>{job.position}</h1>
            <a href={job.website}>
              <button className="button-primary">Apply Now</button>
            </a>
          </div>
          <h4 className={styles.locationh4}>{job.location}</h4>
        </div>
      </div>
      <ul className={styles.articleitems}>
        <li>
          <p>{job.description}</p>
        </li>
        <li>
          <h2>{job.requirements.content}</h2>
        </li>
        {job.requirements.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li>
          <h2>{job.role.content}</h2>
        </li>
        {job.role.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
