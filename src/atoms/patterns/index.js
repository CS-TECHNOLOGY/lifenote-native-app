import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { persistAtom } from '../atomPersist';

export const activeRouteState = atom({
  key: 'PATTERN_LOCK',
  default: { patternLock: '' },
  effects_UNSTABLE: [persistAtom('patternLock')],
});

export const usePatternState = () => {
  return useRecoilState(activeRouteState);
};

export const usePatternValue = () => {
  return useRecoilValue(activeRouteState);
};

export const useSetPatternState = () => {
  return useSetRecoilState(activeRouteState);
};
