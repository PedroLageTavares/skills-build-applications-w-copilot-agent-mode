import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { createCollectionRouter } from './createCollectionRouter.js';

export const leaderboardRouter = createCollectionRouter(LeaderboardEntry, { sort: { rank: 1 } });