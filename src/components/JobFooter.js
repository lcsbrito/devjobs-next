import styles from "@/styles/jobfooter.module.css";

export default function JobFooter({ job }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.flextitle}>
        <h2 className="job-title">{job.position}</h2>
        <p>{job.company}</p>
      </div>
      <a href={job.website}>
        <button className="button-primary">Apply Now</button>
      </a>
    </footer>
  );
}
