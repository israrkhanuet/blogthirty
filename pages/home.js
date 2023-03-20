import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch blogs and jobs data from API endpoints
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    };
    const fetchJobs = async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    };
    fetchBlogs();
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome blogthirty</h1>

        <section>
          <h2>Blogs</h2>
          {blogs.length > 0 ? (
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <Link href={`/blogs/${blog.id}`}>
                    <a>{blog.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No blogs found.</p>
          )}
        </section>

        <section>
          <h2>Jobs</h2>
          {jobs.length > 0 ? (
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>
                  <Link href={`/jobs/${job.id}`}>
                    <a>{job.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No jobs found.</p>
          )}
        </section>
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
        section {
          margin-bottom: 3rem;
        }
        h2 {
          margin-bottom: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        a {
          color: #6c63ff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Home;
