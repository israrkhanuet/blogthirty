// pages/news/[url].js
import Base from "@layouts/Baseof";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NewsDetail = () => {
  const router = useRouter();
  const { url, articleData } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articleData) {
      try {
        const parsedArticle = JSON.parse(articleData);
        setArticle(parsedArticle);
      } catch (error) {
        console.error("Error parsing article data", error);
      }
    }
  }, [articleData]);

  const handleBack = () => {
    router.back();
  };

  return (
    <Base>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="mx-auto max-w-2xl rounded-md bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-4xl font-bold">{article?.title}</h1>
            </div>
            <p className="mb-4 text-gray-500">
              Published on {new Date(article?.publishedAt).toLocaleDateString()}
            </p>
            {article?.urlToImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article.urlToImage}
                alt={article.title}
                className="mb-4 h-auto w-full rounded-md object-cover"
              />
            )}
            <p className="mb-4 text-lg text-gray-700">{article?.description}</p>
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="cursor-pointer text-blue-500 hover:underline "
              >
                &#8592; Back
              </button>
              <a
                href={article?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default NewsDetail;
