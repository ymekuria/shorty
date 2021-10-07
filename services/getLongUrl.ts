import { prisma } from '../';

type LongUrl = string | undefined;

const getLongUrl = async (shortUrl: string): Promise<LongUrl> => {
  try {
    console.log('getting long url');
    const link = await prisma.link.findUnique({
      where: {
        shortUrl
      },
      select: {
        longUrl: true
      }
    });
    console.log('longUrl from DB', link.longUrl);
    return link.longUrl;
  } catch (error) {
    console.log('error');
  }
};

export default getLongUrl;
