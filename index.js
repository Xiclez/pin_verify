const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load PIN from .env
const VALID_PIN = process.env.PIN;

// Route to verify PIN
app.post('/verify-pin', (req, res) => {
  const { pin } = req.body;

  if (pin === VALID_PIN) {
    return res.status(200).json({ success: true, message: "PIN verified" });
  }

  return res.status(403).json({ success: false, message: "Invalid PIN" });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
