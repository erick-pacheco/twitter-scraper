import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World from API');
});

app.listen(port, () =>
  console.log(`App listening on port: ${port} \nVisit http://localhost:${port}`)
);
