// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// toast.configure();

// const UniversityForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     location: "",
//     founder: "",
//     viceChancellor: "",
//     chancellor: "",
//     achievements: "",
//     about: "",
//     examsAccepted: "",
//     highestPackage: "",
//     averagePackage: "",
//     ranking: "",
//     approvalRecognition: "",
//     courseFeeDetails: null,
//     photos: [],
//     prospectus: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: name === "photos" ? Array.from(files) : files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     for (const key in form) {
//       if (key === "photos") {
//         form[key].forEach((photo) => {
//           formData.append("photos", photo);
//         });
//       } else {
//         formData.append(key, form[key]);
//       }
//     }

//     try {
//       const response = await axios.post(
//         "https://updatedfmccollegedetailsform-3.onrender.com/api/universities", // Update the URL
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response.data);
//       toast.success("Data saved successfully");
//       resetForm();
//     } catch (error) {
//       console.error("Error submitting the form", error);
//       toast.error("Error submitting the form");
//       if (error.response) {
//         console.error(
//           "Server responded with a status other than 2xx:",
//           error.response.status
//         );
//       } else if (error.request) {
//         console.error("No response received from the server");
//       } else {
//         console.error("Error setting up the request:", error.message);
//       }
//     }
//   };

//   const resetForm = () => {
//     setForm({
//       name: "",
//       location: "",
//       founder: "",
//       viceChancellor: "",
//       chancellor: "",
//       achievements: "",
//       about: "",
//       examsAccepted: "",
//       highestPackage: "",
//       averagePackage: "",
//       ranking: "",
//       approvalRecognition: "",
//       courseFeeDetails: null,
//       photos: [],
//       prospectus: null,
//     });
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>University/College Data Form</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.field}>
//           <label>University/College Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College Location</label>
//           <input
//             type="text"
//             name="location"
//             value={form.location}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College Founder</label>
//           <input
//             type="text"
//             name="founder"
//             value={form.founder}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>Vice Chancellor</label>
//           <input
//             type="text"
//             name="viceChancellor"
//             value={form.viceChancellor}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>Chancellor</label>
//           <input
//             type="text"
//             name="chancellor"
//             value={form.chancellor}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College Top Achievements</label>
//           <textarea
//             name="achievements"
//             value={form.achievements}
//             onChange={handleChange}
//             style={styles.textarea}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College About Us</label>
//           <textarea
//             name="about"
//             value={form.about}
//             onChange={handleChange}
//             style={styles.textarea}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College Entrance Exams Accepted</label>
//           <input
//             type="text"
//             name="examsAccepted"
//             value={form.examsAccepted}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College Highest Package</label>
//           <input
//             type="text"
//             name="highestPackage"
//             value={form.highestPackage}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College Average Package</label>
//           <input
//             type="text"
//             name="averagePackage"
//             value={form.averagePackage}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College All India Ranking</label>
//           <input
//             type="text"
//             name="ranking"
//             value={form.ranking}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>University/College Approval & Recognition</label>
//           <input
//             type="text"
//             name="approvalRecognition"
//             value={form.approvalRecognition}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>
//             Upload University/College Course and Fee Details (Excel only)
//           </label>
//           <input
//             type="file"
//             name="courseFeeDetails"
//             accept=".xlsx,.xls"
//             onChange={handleFileChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>
//             Upload University/College Photos (Images only, multiple allowed)
//           </label>
//           <input
//             type="file"
//             name="photos"
//             accept=".jpg,.jpeg,.png"
//             onChange={handleFileChange}
//             style={styles.input}
//             multiple
//             required
//           />
//         </div>
//         <div style={styles.field}>
//           <label>Upload University/College Prospectus (PDF only)</label>
//           <input
//             type="file"
//             name="prospectus"
//             accept=".pdf"
//             onChange={handleFileChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <button type="submit" style={styles.submitButton}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: "lightblue",
//     padding: "20px",
//     borderRadius: "10px",
//     maxWidth: "600px",
//     margin: "auto",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   field: {
//     marginBottom: "15px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   textarea: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   submitButton: {
//     padding: "10px",
//     borderRadius: "5px",
//     border: "none",
//     backgroundColor: "darkblue",
//     color: "white",
//     cursor: "pointer",
//   },
// };

// export default UniversityForm;
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UniversityDetailsForm = () => {
  const [formData, setFormData] = useState({
    universityName: '',
    recognitionApprovals: '',
    estDate: '',
    location: '',
    founder: '',
    examsAccepted: '',
    admissionProcess: '',
    cutOffDetails: '',
    placementDetails: '',
    highestPackage: '',
    averagePackage: '',
    infrastructure: '',
    scholarship: '',
    ranking: '',
  });

  const [courseFeeDetails, setCourseFeeDetails] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [brochure, setBrochure] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'courseFeeDetails') setCourseFeeDetails(files[0]);
    if (name === 'gallery') setGallery(files[0]);
    if (name === 'brochure') setBrochure(files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('universityName', formData.universityName);
    data.append('recognitionApprovals', formData.recognitionApprovals);
    data.append('estDate', formData.estDate);
    data.append('location', formData.location);
    data.append('founder', formData.founder);
    data.append('examsAccepted', formData.examsAccepted);
    data.append('admissionProcess', formData.admissionProcess);
    data.append('cutOffDetails', formData.cutOffDetails);
    data.append('placementDetails', formData.placementDetails);
    data.append('highestPackage', formData.highestPackage);
    data.append('averagePackage', formData.averagePackage);
    data.append('infrastructure', formData.infrastructure);
    data.append('scholarship', formData.scholarship);
    data.append('ranking', formData.ranking);

    if (courseFeeDetails) data.append('courseFeeDetails', courseFeeDetails);
    if (gallery) data.append('gallery', gallery);
    if (brochure) data.append('brochure', brochure);

    axios.post("https://updatedfmccollegedetailsform-3.onrender.com/api/universities", data)
      .then(response => {
        // console.log(response.data);
        toast.success("Entry Saved")
        setSubmitted(true);
      })
      .catch(error => {
        console.error("There was an error uploading the data!", error);
        toast.error("Something went wrong")
      });
  };

  if (submitted) {
    return (
      <div style={styles.thankYouContainer}>
        <div style={styles.thankYouBox}>Thank You</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h1 style={styles.heading}>University Details Form</h1>
      {/* Add the rest of your form fields here, following the pattern below */}
      <div style={styles.formGroup}>
        <label>University Name:</label>
        <input type="text" name="universityName" value={formData.universityName} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>University Recognition & Approvals:</label>
        <input type="text" name="recognitionApprovals" value={formData.recognitionApprovals} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>University Est. Date:</label>
        <input type="date" name="estDate" value={formData.estDate} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>University Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>University Founder:</label>
        <input type="text" name="founder" value={formData.founder} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Exams Accepted for Admission:</label>
        <input type="text" name="examsAccepted" value={formData.examsAccepted} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Course & Fee Details (Excel files only):</label>
        <input type="file" name="courseFeeDetails" accept=".xls,.xlsx" onChange={handleFileChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Admission Process & Eligibility for Course:</label>
        <input type="text" name="admissionProcess" value={formData.admissionProcess} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Cut Off Details:</label>
        <input type="text" name="cutOffDetails" value={formData.cutOffDetails} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Placement Details:</label>
        <input type="text" name="placementDetails" value={formData.placementDetails} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Highest Package:</label>
        <input type="text" name="highestPackage" value={formData.highestPackage} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Average Package:</label>
        <input type="text" name="averagePackage" value={formData.averagePackage} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>University Infrastructure:</label>
        <input type="text" name="infrastructure" value={formData.infrastructure} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Scholarship:</label>
        <input type="text" name="scholarship" value={formData.scholarship} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Ranking:</label>
        <input type="text" name="ranking" value={formData.ranking} onChange={handleChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>University Gallery (Image files only):</label>
        <input type="file" name="gallery" accept="image/*" onChange={handleFileChange} style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>University Brochure (PDF only):</label>
        <input type="file" name="brochure" accept="application/pdf" onChange={handleFileChange} style={styles.input} />
      </div>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: '#add8e6',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: 'auto'
  },
  heading: {
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '100%'
  },
  thankYouContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#add8e6'
  },
  thankYouBox: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '2em'
  }
};

export default UniversityDetailsForm;
