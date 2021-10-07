import yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import url from 'url';
export default (req: Request, res: Response, next: NextFunction) => {
  //
  const { requestUrl } =
    req.path === '/shorturl' ? req.body.longUrl : req.params.shortUrl;
};
