import { User } from '../models/User.js';
import { createCollectionRouter } from './createCollectionRouter.js';

export const usersRouter = createCollectionRouter(User, { sort: { name: 1 } });