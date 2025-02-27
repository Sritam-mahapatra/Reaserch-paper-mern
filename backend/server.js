require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const SERPER_API_URL = "https://google.serper.dev/search"; 

app.get("/search", async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "Missing query parameter" });

  try {
    const response = await axios.post(
      SERPER_API_URL,
      { q: query, num: 5 }, 
      { headers: { "X-API-KEY": process.env.SERPER_API_KEY } }
    );

    const papers = response.data.organic.map((item) => ({
      title: item.title,
      url: item.link,
      authors: item.snippet, 
      date: item.date || "Unknown",
    }));

    res.json({ papers });
  } catch (error) {
    console.error("Serper API Error:", error);
    res.status(500).json({ error: "Failed to fetch research papers" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
