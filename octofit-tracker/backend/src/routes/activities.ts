import { Activity } from '../models/Activity.js';
import { createCollectionRouter } from './createCollectionRouter.js';

export const activitiesRouter = createCollectionRouter(Activity, { sort: { loggedAt: -1 } });