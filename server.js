import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { getCoins, getCryptoDetails, getExchanges, getCryptoHistory } from './routes/cryptoRoute.js'
import { getCryptoNews } from "./routes/newsRoute.js";

const PORT = process.env.PORT || 5000;
const app = express();

// Rate Limiting
const callLimiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 Mins
  max: 100,
});

app.use(callLimiter);
app.set("trust proxy", 1);

// Enable cors
app.use(cors());
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

// Crypto Info Route
app.use('/coins', getCoins);
app.use('/exchanges', getExchanges);
app.use('/coin/:coinId/history/:timePeriod', getCryptoHistory);
app.use('/coin/:coinId', getCryptoDetails);

// Crypto News Route
app.use(`/news/search`, getCryptoNews);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));