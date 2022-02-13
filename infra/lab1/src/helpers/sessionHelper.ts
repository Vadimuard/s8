import * as crypto from 'crypto';

const fromBase64 = (base64: string) =>
  base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const createSessionToken = async () => {
  const token = await new Promise((resolve, reject) => {
    crypto.randomBytes(16, (error, data) => {
      error ? reject(error) : resolve(fromBase64(data.toString('base64')));
    });
  });
  return crypto
    .createHash('sha256')
    .update(token as crypto.BinaryLike)
    .digest('base64');
};

export { createSessionToken };
