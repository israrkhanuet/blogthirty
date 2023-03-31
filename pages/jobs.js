import { useState } from "react";
import styles from "../styles/JobForm.module.css";
import Layout from "../components/layout";

export default function MyForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    image: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/create-job", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log(response.collection);
      // Handle successful response
    } else {
      // Handle error response
    }
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit} className={styles.form2}>
          <h4>Advertise Your Jobs Here</h4>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className={styles.input1}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Descriptions</label>
            <textarea
              name="description"
              className={styles.input2}
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Salary</label>
            <input
              className={styles.input1}
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Picture</label>
            <input
              className={styles.button1}
              type="file"
              name="image"
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className={styles.button1}>
            Submit
          </button>
        </form>
        <style jsx>{`
          form {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            margin: 0 auto;
          }

          input,
          textarea {
            margin-bottom: 1rem;
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 1rem;
          }

          input[type="number"] {
            -moz-appearance: textfield;
          }

          input[type="file"] {
            margin-bottom: 2rem;
          }

          button[type="submit"] {
            background-color: #0077cc;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
          }

          button[type="submit"]:hover {
            background-color: #005fa3;
          }
        `}</style>
      </Layout>
    </>
  );
}
