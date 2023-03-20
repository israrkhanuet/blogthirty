import Head from "next/head";
import { useState, useEffect } from "react";

function Jobs() {
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job data from API endpoint
    const fetchJob = async () => {
      const res = await fetch("/api/jobs/today");
      const data = await res.json();
      setJob(data);
    };
    fetchJob();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Job Post - My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Job Post</h1>

        {job ? (
          <section>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </section>
        ) : (
          <p>No job post found for today.</p>
        )}
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }
        h1 {
          margin-bottom: 2rem;
          text-align: center;
        }
        h2 {
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default Jobs;
