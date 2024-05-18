import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const UniversityForm = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    founder: "",
    viceChancellor: "",
    chancellor: "",
    achievements: "",
    about: "",
    examsAccepted: "",
    highestPackage: "",
    averagePackage: "",
    ranking: "",
    approvalRecognition: "",
    courseFeeDetails: null,
    photos: [],
    prospectus: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "photos" ? Array.from(files) : files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in form) {
      if (key === "photos") {
        form[key].forEach((photo) => {
          formData.append("photos", photo);
        });
      } else {
        formData.append(key, form[key]);
      }
    }

    try {
      const response = await axios.post(
        "https://updatedfmccollegedetailsform-3.onrender.com/api/universities", // Update the URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success("Data saved successfully");
      resetForm();
    } catch (error) {
      console.error("Error submitting the form", error);
      toast.error("Error submitting the form");
      if (error.response) {
        console.error(
          "Server responded with a status other than 2xx:",
          error.response.status
        );
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      location: "",
      founder: "",
      viceChancellor: "",
      chancellor: "",
      achievements: "",
      about: "",
      examsAccepted: "",
      highestPackage: "",
      averagePackage: "",
      ranking: "",
      approvalRecognition: "",
      courseFeeDetails: null,
      photos: [],
      prospectus: null,
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>University/College Data Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label>University/College Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College Founder</label>
          <input
            type="text"
            name="founder"
            value={form.founder}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>Vice Chancellor</label>
          <input
            type="text"
            name="viceChancellor"
            value={form.viceChancellor}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>Chancellor</label>
          <input
            type="text"
            name="chancellor"
            value={form.chancellor}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College Top Achievements</label>
          <textarea
            name="achievements"
            value={form.achievements}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College About Us</label>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College Entrance Exams Accepted</label>
          <input
            type="text"
            name="examsAccepted"
            value={form.examsAccepted}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College Highest Package</label>
          <input
            type="text"
            name="highestPackage"
            value={form.highestPackage}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College Average Package</label>
          <input
            type="text"
            name="averagePackage"
            value={form.averagePackage}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College All India Ranking</label>
          <input
            type="text"
            name="ranking"
            value={form.ranking}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>University/College Approval & Recognition</label>
          <input
            type="text"
            name="approvalRecognition"
            value={form.approvalRecognition}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>
            Upload University/College Course and Fee Details (Excel only)
          </label>
          <input
            type="file"
            name="courseFeeDetails"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>
            Upload University/College Photos (Images only, multiple allowed)
          </label>
          <input
            type="file"
            name="photos"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            style={styles.input}
            multiple
            required
          />
        </div>
        <div style={styles.field}>
          <label>Upload University/College Prospectus (PDF only)</label>
          <input
            type="file"
            name="prospectus"
            accept=".pdf"
            onChange={handleFileChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "darkblue",
    color: "white",
    cursor: "pointer",
  },
};

export default UniversityForm;
