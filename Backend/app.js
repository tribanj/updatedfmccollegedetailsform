const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve static files from the 'uploads' directory

mongoose
  .connect(
    "mongodb+srv://tribhuwanja:9doa4xtYeWAvQpAn@cluster0.ijgu1jf.mongodb.net/FindMyCollege",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to the database: " + error);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const universitySchema = new mongoose.Schema({
  universityName: String,
  recognitionApprovals: String,
  estDate: String,
  location: String,
  founder: String,
  examsAccepted: String,
  admissionProcess: String,
  cutOffDetails: String,
  placementDetails: String,
  highestPackage: String,
  averagePackage: String,
  infrastructure: String,
  scholarship: String,
  ranking: String,
  courseFeeDetailsUrl: String,
  photosUrls: [String],
  prospectusUrl: String,
});

const University = mongoose.model("University", universitySchema);

app.post(
  "/api/universities",
  upload.fields([
    { name: "courseFeeDetails" },
    { name: "gallery" },
    { name: "brochure" },
  ]),
  async (req, res) => {
    try {
      const photosUrls = req.files["gallery"]
        ? req.files["gallery"].map((file) => file.path)
        : [];
      const courseFeeDetailsUrl = req.files["courseFeeDetails"]
        ? req.files["courseFeeDetails"][0].path
        : "";
      const prospectusUrl = req.files["brochure"]
        ? req.files["brochure"][0].path
        : "";

      const newUniversity = new University({
        ...req.body,
        photosUrls,
        courseFeeDetailsUrl,
        prospectusUrl,
      });

      await newUniversity.save();
      res.json(newUniversity);
    } catch (error) {
      console.error("An error occurred:", error);
      res
        .status(500)
        .json({ error: "An error occurred while saving the university data." });
    }
  }
);

app.get("/api/universities", async (req, res) => {
  try {
    const data = await University.find().lean();
    res.json(data);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
