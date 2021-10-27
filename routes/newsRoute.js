import axios from "axios";
import dotenv from "dotenv";

dotenv.config()

export const getCryptoNews = (req, res) => {
  const { q: query, count } = req.query;
  axios.request({
    method: 'GET',
    url: `${process.env.APP_NEWS_API_URL}/news/search`,
    params: {
      q: query,
      count: count ? count : 100,
      freshness: 'Day',
      textFormat: 'Raw', 
      safeSearch: 'Off',
    },
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': process.env.APP_NEWS_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.APP_RAPIDAPI_KEY, 
    }
  }).then(response => {
    res.send(response.data);
  }).catch(error => {
    console.error(error);
  });
};
