import { Express, Request, Response, NextFunction } from 'express';
import getLongUrl from '../services/getLongUrl';

const urlRedirect = async (req: Request, res: Response, next: NextFunction) => {
  const shortUrl = req.params.url;

  try {
    const longUrl = await getLongUrl(shortUrl);

    if (longUrl) {
      res.redirect(longUrl);
    } else {
      res.status(404).json('Short Url is Invalid');
    }
  } catch (error) {
    console.log('error', error);
    res.status(500).json('Server Error');
    next(error);
  }
};

export default urlRedirect;
