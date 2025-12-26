const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const storage = [];

app.post("/api/names", (req, res) => {
  const { name } = req.body;

  if (typeof name !== "string") {
    return res.status(400).json({
      success: false,
      message: "Name must be a string",
    });
  }

  if (!name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Name must be a non-empty string",
    });
  }

  const exists = storage.some(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (exists) {
    return res.status(400).json({
      success: false,
      message: "Name already exists",
    });
  }

  storage.push({
    name,
    createdAt: new Date().toISOString(),
  });

  return res.status(201).json({
    success: true,
    message: "Name stored successfully",
  });
});

app.get("/api/names", (req, res) => {
  return res.json({
    success: true,
    names: storage,
  });
});

app.delete("/api/names", (req, res) => {
  storage.length = 0;

  res.json({
    success: true,
    message: "All names cleared",
  });
});

app.listen(PORT);
