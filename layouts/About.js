// components/News.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

const News = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/news`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    fetchData();
  }, []);

  if (status === "loading") {
    return (
      <div className="flex min-h-[520px] items-center justify-center">
        Loading...
      </div>
    );
  }

  if (status === "error" || !data) {
    return (
      <div className="flex min-h-[520px] items-center justify-center">
        Error fetching data
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>News Headlines</title>
        <meta name="description" content="Today news headlines and updates" />
        <link rel="canonical" href="https://bestoblog.vercel.app/about" />
        <meta property="og:title" content="News Headlines" />
        <meta
          property="og:description"
          content="Today news headlines and updates"
        />
        <meta property="og:image" content={data.articles[0].urlToImage} />
        <meta property="og:url" content="https://bestoblog.vercel.app/about" />
      </Head>
      <p className="mb-4 flex items-center justify-center text-2xl font-bold">
        NEWS HEADLINES
      </p>
      <div className="grid grid-cols-1 justify-items-center gap-8 pb-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.articles
          .filter((article) => article.description !== "[Removed]")
          .map((article, i) => (
            <div
              className="max-w-sm cursor-pointer overflow-hidden rounded shadow-lg"
              key={i}
            >
              <Link
                legacyBehavior
                href={{
                  pathname: `/news/[url]`,
                  query: {
                    url: encodeURIComponent(article.url),
                    articleData: JSON.stringify(article),
                  },
                }}
              >
                <a>
                  {article.urlToImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="h-48 w-full object-cover"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="h-48 w-full object-cover"
                      src="/images/logo.png"
                      alt="Default Image"
                    />
                  )}
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">
                      {article.title}
                    </div>
                    <p className="text-base text-gray-700">
                      {article.description
                        ? article.description
                        : article.title
                        ? null
                        : "No desription available"}
                    </p>
                  </div>
                  <div className="px-6 py-1">
                    <span className="text-blue-500 hover:underline">
                      Read More
                    </span>
                  </div>
                  <div className="px-6 py-4">
                    <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      {article.source.name}
                    </span>
                    <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default News;
