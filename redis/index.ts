import redis from 'redis';
const REDIS_URL = process.env.REDIS_URL || '6379';
const client = redis.createClient(REDIS_URL);

client.on('error', (error) => {
  console.log(error);
});

export const setValue = async (key: string, value: string) => {
  return new Promise((resolve) => {
    client.set(key, value, (err, res) => {
      if (err) console.error(err);
      resolve(res);
    });
  });
};

export const getValue = async (key: string) => {
  return new Promise((resolve) => {
    client.get(key, (err, res) => {
      if (err) console.error(err);
      resolve(res);
    });
  });
};
