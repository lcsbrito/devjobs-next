"use client";

import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import fetchJobs from "@/requests/fetchJobs";
import timeElapsed from "@/utils/timeElapsed";

export default function ListJobs({ jobs, setJobs, searchActive }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchJobs(currentPage).then((data) => {
      setJobs((jobs) => [...jobs, ...data.jobs]);
      setTotalPages(data.totalPages);
    });
  }, [currentPage]);

  const loadMoreJobs = () => {
    console.log("LOAD MORE JOBS STARTED");
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          id={job._id}
          position={job.position}
          company={job.company}
          location={job.location}
          logo={job.logo}
          logoBackground={job.logoBackground}
          postedAt={timeElapsed(job.postedAt)}
          contract={job.contract}
        />
      ))}
      {!searchActive && currentPage < totalPages && (
        <button onClick={() => loadMoreJobs()}>Load More</button>
      )}
    </>
  );
}
