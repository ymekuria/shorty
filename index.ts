import express, { Application, Request, Response, NextFunction } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import cors from 'cors';

const app: Application = express();
// creating a single instance of the prisma client to use in the api routes
export const prisma = new PrismaClient({ log: ['query', 'info'] });
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

require('./routes/index.js')(app);

if (process.env.NODE_ENV === 'production') {
  // serves up production assets
  // main.js or main.css file
  app.use(express.static('client/build'));

  // serve ups the index.hml
  // file if it doesn't understand the route ie react router
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || '8090';
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:';
app.listen(PORT, () => console.log(`server ready at ${SERVER_URL}${PORT}`));
