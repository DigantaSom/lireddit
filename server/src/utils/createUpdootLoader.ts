import DataLoader from 'dataloader';
import { Updoot } from '../entities/Updoots';

export const createUpdootLoader = () =>
  new DataLoader<{ userId: number; postId: number }, Updoot | null>(async keys => {
    const updoots = await Updoot.findByIds(keys as any[]);

    const updootIdsToUpdoot: Record<string, Updoot> = {};

    updoots.forEach(updoot => {
      updootIdsToUpdoot[`${updoot.userId}|${updoot.postId}`] = updoot;
    });

    const sortedUpdoots = keys.map(
      key => updootIdsToUpdoot[`${key.userId}|${key.postId}`]
    );
    return sortedUpdoots;
  });
