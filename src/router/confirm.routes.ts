import { Router } from 'express';

const confirmRouter = Router();

confirmRouter.patch('/', (req, res) => {
  res.send('patch /confirm');
}); //validateBody(uploadSchema), uploadController.uploadImage

export default confirmRouter;
