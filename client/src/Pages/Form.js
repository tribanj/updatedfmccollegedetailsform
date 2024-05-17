// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Courses from "../Components/Courses";
// import { PORT } from "../Host";
// import '../Form.css'

// const Form = () => {
//   // const [options, setOptions] = useState([]);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [cutoff, setCutoff] = useState("");
//   const [ratings, setRatings] = useState("");
//   const [review, setReview] = useState("");
//   const [renk, setRenk] = useState("");
//   const [fee, setFee] = useState("");
//   const [cources, setCources] = useState([]);
//   const [courceDetails, setCourceDetails] = useState("");
//   const [acceptedExams, setAcceptedExams] = useState("");
//   const [avgpkg, setAvgpkg] = useState("");
//   const [highpkg, setHighpkg] = useState("");
//   const [image, setImage] = useState(null);

//   // Add a state variable to track form submission success
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(cources);
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("cutoff", cutoff);
//     formData.append("ratings", ratings);
//     formData.append("review", review);
//     formData.append("renk", renk);
//     formData.append("fee", fee);
//     formData.append("cources", JSON.stringify(cources));
//     formData.append("courceDetails", courceDetails);
//     formData.append("acceptedExams", acceptedExams);
//     formData.append("avgpkg", avgpkg);
//     formData.append("highpkg", highpkg);
//     formData.append("image", image);

//     try {
//       await axios.post(`${PORT}api/items`, formData, {
//         "Content-Type": "multipart/form-data",
//       });
//       toast.success("Item saved successfully!");
//       setIsFormSubmitted(true); // Set form submission success
//       // Clear form fields
//       setName("");
//       setDescription("");
//       setCutoff("");
//       setRatings("");
//       setReview("");
//       setRenk("");
//       setFee("");
//       setCources("");
//       setCourceDetails("");
//       setAcceptedExams("");
//       setAvgpkg("");
//       setHighpkg("");
//       setImage(null);
//     } catch (error) {
//       toast.error("An error occurred while saving the item.");
//       console.log(error);
//     }
//   };

//   // Function to reset the form
//   const resetForm = () => {
//     setName("");
//     setDescription("");
//     setCutoff("");
//     setRatings("");
//     setReview("");
//     setRenk("");
//     setFee("");
//     setCources([]);
//     setCourceDetails("");
//     setAcceptedExams("");
//     setAvgpkg("");
//     setHighpkg("");
//     setImage(null);
//     setIsFormSubmitted(false);
//   };

//   return (
//     <>
//       <h1 className="h1h">Fill the University Details</h1>
//       {isFormSubmitted ? (
//         <div>
//           <p>Form submitted successfully!</p>
//           <button onClick={resetForm}>Reset Form</button>
//         </div>
//       ) : (
//         <div className="form-section">
//           <form >
//             <div className="input1">
//               <input
//                 type="text"
//                 placeholder="University/College Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input2">
//               <input
//                 type="number"
//                 placeholder="Ratings"
//                 value={ratings}
//                 onChange={(e) => setRatings(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Write your thoughts"
//                 value={review}
//                 onChange={(e) => setReview(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input3">
//               <input
//                 type="text"
//                 placeholder="Cutoff "
//                 value={cutoff}
//                 onChange={(e) => setCutoff(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Ranking"
//                 value={renk}
//                 onChange={(e) => setRenk(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input4">
//               <input
//                 type="text"
//                 placeholder="Fees"
//                 value={fee}
//                 onChange={(e) => setFee(e.target.value)}
//                 required
//               />

//               {/* <input
//                 type="text"
//                 placeholder="Cources"
//                 value={cources}
//                 onChange={(e) => setCources(e.target.value)}
//                 required
//               /> */}
//             </div>
//             <div className="input5">
//               <input
//                 type="text"
//                 placeholder="acceptedExams"
//                 value={acceptedExams}
//                 onChange={(e) => setAcceptedExams(e.target.value)}
//                 required
//               />
//               <input
//                 type="number"
//                 placeholder="average package"
//                 value={avgpkg}
//                 onChange={(e) => setAvgpkg(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input6">
//               <input
//                 type="number"
//                 placeholder="Highest package"
//                 value={highpkg}
//                 onChange={(e) => setHighpkg(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="University Address"
//                 value={courceDetails}
//                 onChange={(e) => setCourceDetails(e.target.value)}
//                 required
//               />
//             </div>
//             <Courses options={cources} setOptions={setCources} />
//             <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//             <button  className="btn1" onClick={handleSubmit}>
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Form;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
        "http://localhost:3001/api/universities",
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
      toast.error("Error submitting the form", error);
    }
  };
  const resetForm = () => {
    setForm({
      name: '',
      location: '',
      founder: '',
      viceChancellor: '',
      chancellor: '',
      achievements: '',
      about: '',
      examsAccepted: '',
      highestPackage: '',
      averagePackage: '',
      ranking: '',
      approvalRecognition: '',
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
