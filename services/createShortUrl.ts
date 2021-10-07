import { prisma } from '../';
import { getValue, setValue } from '../redis/';
import { nanoid } from 'nanoid';

type ShortUrl = string | undefined;
const createShortUrl = async (longUrl: string): Promise<ShortUrl> => {
  let shortUrl;
  try {
    // create a new shortUrl and add to db if not in cache
    shortUrl = nanoid(8);
    /*
    TODO: consider tradeoffs of checking for collisions of shortUrl here with either
    another db call or cache lookup. Roughly 1% probablity of a collision in 100 days
    with a rate of 1000 new short urls per hour. Handling currently by passing undefined 
    if collosion and the client doesn't see the shortUrl. It would apear to the user that 
    the buton wasn't pressed and they would repress to get another shortURL 
   */
    console.log('shortUrl to add to db', shortUrl);
    let newLink = await prisma.link.create({
      data: {
        longUrl,
        shortUrl
      },
      select: {
        shortUrl: true
      }
    });

    // avoids adding to the cache if a newLink isn't created
    if (newLink) {
      await setValue(longUrl, newLink.shortUrl);
      console.log(`${longUrl} : ${newLink.shortUrl} added to cache`);
    }

    return newLink?.shortUrl;
  } catch (error) {
    console.log('error');
  }
};

export default createShortUrl;
