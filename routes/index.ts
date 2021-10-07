import { Express } from 'express';
import shortenUrl from '../controllers/shortenUrl';
import urlRedirect from '../controllers/urlRedirect';

module.exports = (app: Express) => {
  app.get('/:url', urlRedirect);
  app.post('/shorturl', shortenUrl);
};
