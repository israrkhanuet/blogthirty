import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";
import axios from "axios";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  // Updated API endpoint
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/contactapi`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(apiEndpoint, {
        name,
        email,
        subject,
        message,
      });
      alert("Message sent successfuly");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <form
          className="contact-form"
          method="POST"
          action={apiEndpoint} // Update the action attribute
          onSubmit={handleSubmit} // Add onSubmit handler
        >
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">
              Name
            </label>
            <input
              className="form-input w-full"
              name="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full"
              name="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">
              Subject
            </label>
            <input
              className="form-input w-full"
              name="subject"
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-textarea w-full"
              rows="7"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
            />
          </div>
          <button className="btn btn-outline-primary" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
