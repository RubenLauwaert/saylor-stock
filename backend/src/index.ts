import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req: Request, res: Response) => {
  console.log("got request !");
  res.send('Welcome to the Saylor-Stock Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
