import express from 'express';
import * as Scraper from './twitter';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (_, res) => {
  const response = await Scraper.scrapeMyTweet('1596222793388945408');
  res.status(200).send(response);
});

app.listen(port, () =>
  console.log(`App listening on port: ${port} \nVisit http://localhost:${port}`)
);
