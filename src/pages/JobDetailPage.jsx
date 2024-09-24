import React, { useState, useEffect } from 'react';

const JobDetailPage = ({ match }) => {
  const { id } = match.params;
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch the job details from the API or mock data
    fetch(`https://api.example.com/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data.job));
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetailPage;
