import { Router } from 'express';
import type { Model } from 'mongoose';

type SortDirection = 1 | -1;

interface CollectionRouterOptions {
  sort?: Record<string, SortDirection>;
}

export function createCollectionRouter(model: Model<any>, options: CollectionRouterOptions = {}) {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const items = await model.find().sort(options.sort ?? {}).lean();
      response.json(items);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
      const item = await model.create(request.body);
      response.status(201).json(item);
    } catch (error) {
      next(error);
    }
  });

  return router;
}