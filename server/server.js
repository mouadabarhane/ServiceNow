const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const retrieveIncidents = require('./services/retrieveIncidents');
const createIncident = require('./services/createIncident'); // Import the createIncident function
const updateIncident = require('./services/updateIncident');
const deleteIncident = require('./services/deleteIncident');

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(`mongodb+srv://abarhanemouad:ddiJ5Dx_9j3UkL4@cluster0.u2ibs8g.mongodb.net/hocks`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Models
const UserModel = require("./models/Users");
const AdminModel = require("./models/Admins");

// Routes
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.post("/register", async (req, res) => {
  try {
    // Register admin logic
  } catch (error) {
    res.status(500).json({ error: "Failed to register admin" });
  }
});

app.post("/login", async (req, res) => {
  try {
    // Login logic
  } catch (error) {
    res.status(500).json({ error: "Failed to log in" });
  }
});

// Add route to retrieve incidents from ServiceNow
app.get("/incidents", async (req, res) => {
  try {
    const incidents = await retrieveIncidents();
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve incidents" });
  }
});

// Add route to create an incident in ServiceNow
app.post("/incidents", async (req, res) => {
  try {
    const incidentData = req.body;
    const newIncident = await createIncident(incidentData);
    res.json(newIncident);
  } catch (error) {
    res.status(500).json({ error: "Failed to create incident" });
  }
});

app.put("/incidents/:id", async (req, res) => {
    try {
      const incidentData = req.body;
      const updatedIncident = await updateIncident(req.params.id, incidentData);
      res.json(updatedIncident);
    } catch (error) {
      res.status(500).json({ error: "Failed to update incident" });
    }
  });


app.delete("/incidents/:id", async (req, res) => {
    try {
        await deleteIncident(req.params.id);
        res.json({ message: "Incident deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete incident" });
    }
  });
  

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
