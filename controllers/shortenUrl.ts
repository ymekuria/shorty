import { Express, Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import createShortUrl from '../services/createShortUrl';
import getShortUrlCache from '../services/getShortUrlCache';
const BASE_URL = process.env.BASE_URL;
const validationSchema = yup
  .string()
  .url('Please Enter a Valid URL')
  .required('Please Enter a Valid URL')
  .min(6);
const shortenUrl = async (req: Request, res: Response, next: NextFunction) => {
  const { longUrl } = req.body;
  let shortUrl;

  try {
    //perform url validation with yup
    let validLongUrl = await validationSchema.validate(longUrl);

    shortUrl = await getShortUrlCache(validLongUrl);

    if (shortUrl) {
      res.json({ shortUrl, BASE_URL });
    } else {
      shortUrl = await createShortUrl(validLongUrl);
      res.json({ shortUrl, BASE_URL });
    }
  } catch (error) {
    console.log('error', error);
    next(error);
  }
};

export default shortenUrl;
