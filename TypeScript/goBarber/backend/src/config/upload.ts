import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmp = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  diretory: tmp,
  storage: multer.diskStorage({
    destination: tmp,
    filename(request, file, cb) {
      const hash = crypto.randomBytes(10).toString('HEX');
      const filename = `${hash}-${file.originalname}`;
      return cb(null, filename);
    },
  }),
};
