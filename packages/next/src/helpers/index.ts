import { StyleProp } from '../types/global';

export const resolveStyleProp = <T>(value: StyleProp<T>): T | undefined => {
  if (typeof value === 'object') {
    return undefined;
  }
  return value;
};
