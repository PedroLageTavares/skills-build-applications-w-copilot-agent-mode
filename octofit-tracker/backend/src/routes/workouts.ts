import { Workout } from '../models/Workout.js';
import { createCollectionRouter } from './createCollectionRouter.js';

export const workoutsRouter = createCollectionRouter(Workout, { sort: { title: 1 } });