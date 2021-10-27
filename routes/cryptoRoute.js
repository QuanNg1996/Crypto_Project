import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const headers = {
  'x-rapidapi-host': process.env.APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.APP_RAPIDAPI_KEY,
};

export const getCoins = (req, res) => {
  const { limit } = req.query;
  axios.request({
    method: 'GET',
    url: `${process.env.APP_CRYPTO_API_URL}/coins${limit ? `?limit=${limit}` : ''}`,
    headers: headers,
  }).then(response => {
    res.send(response.data);
  }).catch(error => {
    console.error(error);
  });
};

export const getExchanges = (_, res) => {
  axios.request({
    method: 'GET',
    url: `${process.env.APP_CRYPTO_API_URL}/exchanges`,
    headers: headers,
  }).then(response => {
    res.send(response.data);
  }).catch(error => {
    console.error(error);
  });
};

export const getCryptoHistory = (req, res) => {
  const { coinId, timePeriod } = req.params;
  axios.request({
    method: 'GET',
    url: `${process.env.APP_CRYPTO_API_URL}/coin/${coinId}/history/${timePeriod}`,
    headers: headers,
  }).then(response => {
    res.send(response.data);
  }).catch(error => {
    console.error(error);
  });
};

export const getCryptoDetails = (req, res) => {
  const { coinId } = req.params;
  axios.request({
    method: 'GET',
    url: `${process.env.APP_CRYPTO_API_URL}/coin/${coinId}`,
    headers: headers,
  }).then(response => {
	  res.send(response.data);
  }).catch(error => {
	  console.error(error);
  });
};


