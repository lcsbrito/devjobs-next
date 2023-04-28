"use client";

import { useEffect, useState } from "react";
import fetchJobId from "@/requests/fetchJobId";
import JobHeader from "@/components/JobHeader";
import JobContent from "@/components/JobContent";
import JobFooter from "@/components/JobFooter";
import { useParams } from "next/navigation";

export default function Job() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJobId(id).then((data) => {
      setJob(data);
    });
  }, [id]);

  return (
    <>
      <main>
        {job && <JobHeader job={job} />}
        {job && <JobContent job={job} />}
      </main>

      {job && <JobFooter job={job} />}
    </>
  );
}
