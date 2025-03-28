

import express from "express";

import cors from "cors" // Enable frontend connection
import  data  from "./data.js";

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend access

// Start server
app.get('/' , (req,res) => {
  res.send('This is a test server');
});


app.get('/api/data' , (req,res) => {
  res.send(data);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running successfully on http://localhost:${PORT}`));
