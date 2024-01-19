// pages/api/news.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      `apiKey=${process.env.NEWS_API}`;
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}