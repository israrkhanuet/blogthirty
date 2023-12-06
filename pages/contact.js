import { useState } from "react";
import Layout from "../components/layout";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setSubmitSuccess(true);
    } else {
      console.error("Error submitting form");
      setSubmitSuccess(false);
    }
  };

  return (
    <Layout>
      <div className='contact-container'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {submitSuccess && (
            <div className='success-message'>Message sent successfully!</div>
          )}
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              className='form-control'
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              className='form-control'
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea
              className='form-control'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className='btn-submit' type='submit'>
            Submit
          </button>
        </form>

        <style jsx>{`
          form {
            width: 500px;
          }
          .contact-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .form-group {
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          label {
            margin-bottom: 0.5rem;
            font-size: 1rem;
            font-weight: bold;
          }
          .form-control {
            padding: 0.5rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .form-control:focus {
            outline: none;
            border-color: #6c63ff;
          }
          .btn-submit {
            background-color: #6c63ff;
            color: #fff;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .btn-submit:hover {
            background-color: #5246d7;
          }
          .success-message {
            color: #4caf50;
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default Contact;
