require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const server = express();
export const nextApp = next({ dev });

const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.use((_: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  server.post('/other-path', (req: express.Request, res: express.Response) => {});

  server.get('*', (req, res) => nextHandler(req, res));

  // Start server
  server.listen(process.env.PORT, () => console.log(`Server runned!`));
});
