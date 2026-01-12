import { isNullOrUndefined } from '@coldrun/monorepo-typescript-shared';

export type Result<T, E> = {
  result?: T;
  error?: E;
};

export function isError<T, E>(result: Result<T, E>): boolean {
  return !isNullOrUndefined(result.error);
}
