import Head from "next/head";
import { useState } from "react";

const HomePage = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Breaking News",
      image: "https://example.com/news-image.jpg",
      content: "This is a breaking news story. Stay tuned for updates.",
      comments: [],
    },
    // Add more news items as needed
  ]);

  return (
    <div>
      <Head>
        <title>Bannu</title>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
        />
      </Head>
      <main className='container'>
        <h1 className='mt-4 mb-4 text-center'>Welcome News</h1>
        {news.map((post) => (
          <div key={post.id} className='card mb-4'>
            <img
              src={"https://picsum.photos/800/400?random"}
              alt={post.title}
              className='card-img-top'
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <div className='card-body'>
              <h2 className='card-title'>{post.title}</h2>
              <p className='card-text'>{post.content}</p>
              <CommentsSection postId={post.id} comments={post.comments} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

const CommentsSection = ({ postId, comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    // Implement logic to add a new comment to the backend and update state
    // For simplicity, we'll update the state directly here
    setNewComment(""); // Clear the input field
  };

  return (
    <div className='comments-section'>
      <h3 className='mb-3'>Comments</h3>
      <ul className='list-group'>
        {comments.map((comment, index) => (
          <li key={index} className='list-group-item'>
            {comment}
          </li>
        ))}
      </ul>
      <div className='mt-3'>
        <textarea
          rows='3'
          className='form-control'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className='btn btn-primary mt-2' onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default HomePage;
