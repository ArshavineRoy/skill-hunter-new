import React, { useState, useEffect, useRef } from "react";
import JobCard from "./JobCard";
import NewJob from "./NewJob";

function Admin() {
  const [jobs, setJobs] = useState([]);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [jobId, setJobId] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/employers")
      .then((r) => r.json())
      .then((data) => setJobs(data));

    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    if (leftSection && rightSection) {
      leftSection.addEventListener("scroll", handleLeftScroll);
    }

    return () => {
      if (leftSection) {
        leftSection.removeEventListener("scroll", handleLeftScroll);
      }
    };
  }, []);

  const handleLeftScroll = () => {
    const rightSection = rightSectionRef.current;
    if (rightSection) {
      rightSection.style.top = `${leftSectionRef.current.scrollTop}px`;
    }
  };

  function getJobIdFromCard(id) {
    return setJobId(id);
  }

  const displayJobdata = jobs.map((job) => {
    return (
      <span key={job.id}>
        <JobCard
          onButtonClick={getJobIdFromCard}
          job={job}
          onDeleteJob={handleDeletedJob}
        />
      </span>
    );
  });


  function handleDeletedJob(deletedJob){
    const updatedJobs = jobs.filter((job) => job.id !== deletedJob.id)
    setJobs(updatedJobs)
  }

  return (
    <>
      <div>
        <div className="grid grid-cols-2 justify-center">
          <div>
            <section className="py-px lg:pb-18 mb-1  bg-gray-100 overflow-hidden">
              <div
                ref={leftSectionRef}
                style={{ overflowY: "auto", height: "82vh" }}
                className="container px-4 py-4 mx-auto mb-10"
              >
                {displayJobdata}
              </div>
            </section>
          </div>

          <div
            ref={rightSectionRef}
            style={{ overflowY: "auto" }}
            className="max-w-1xl px-4 mx-auto "
          >
            <NewJob jobs={jobs} jobId={jobId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
