const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

// Load the service account key JSON file.
const keyFilePath = "./avromed.json";

// Authenticate with the Google Sheets API.
const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

// Create a Google Sheets API client.
const sheets = google.sheets({ version: "v4", auth });

app.get("/api/sheets", async (req, res) => {
  try {
    // ID of the Google Sheets document to read.
    const spreadsheetId = "Vt0yuRJhrNBQiLyLB5WWBR4H3IB68vSpKxFnSIQWBxk";

    // Range to read data from.
    const range = "Sheet1!A1:E10";

    // Read data from the Google Sheets document.
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    res.status(200).json(response.data.values);
  } catch (error) {
    console.error("Error reading data from Google Sheets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
