require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Enable frontend connection
const Appliance = require("./Models/Appliances");

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend access

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 🔹 Get all appliances
app.get("/appliances", async (req, res) => {
  try {
    const appliances = await Appliance.find();
    res.json(appliances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get a single appliance by ID
app.get("/appliances/:id", async (req, res) => {
  try {
    const appliance = await Appliance.findById(req.params.id);
    if (!appliance) {
      return res.status(404).json({ message: "Appliance not found" });
    }
    res.json(appliance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Create a new appliance (General)
app.post("/appliances", async (req, res) => {
  try {
    const newAppliance = new Appliance(req.body);
    const savedAppliance = await newAppliance.save();
    res.status(201).json(savedAppliance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ NEW: Allow users to submit selected appliances
app.post("/user-appliances", async (req, res) => {
  try {
    const userAppliance = new Appliance(req.body);
    const savedAppliance = await userAppliance.save();
    res
      .status(201)
      .json({
        message: "User appliance added successfully",
        appliance: savedAppliance,
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Update an appliance
app.put("/appliances/:id", async (req, res) => {
  try {
    const updatedAppliance = await Appliance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAppliance) {
      return res.status(404).json({ message: "Appliance not found" });
    }

    res.json(updatedAppliance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Delete an appliance
app.delete("/appliances/:id", async (req, res) => {
  try {
    const deletedAppliance = await Appliance.findByIdAndDelete(req.params.id);

    if (!deletedAppliance) {
      return res.status(404).json({ message: "Appliance not found" });
    }

    res.json({ message: "Appliance deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
