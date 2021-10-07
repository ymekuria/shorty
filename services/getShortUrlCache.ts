import { getValue } from '../redis';

type ShortUrl = string | undefined;

const getShortUrlCache = async (longUrl: string): Promise<ShortUrl> => {
  let shortUrl;
  try {
    shortUrl = await getValue(longUrl);
    console.log(`${longUrl} : ${shortUrl} is in the cache`);
    return shortUrl;
  } catch (error) {
    //test
    console.log('error');
  }
};

export default getShortUrlCache;
