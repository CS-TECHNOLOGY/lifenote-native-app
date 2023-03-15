import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { NULL } from '../../configs/constants';
import { persistAtom } from '../atomPersist';

export const activeRouteState = atom({
  key: 'ACCOUNT',
  default: {
    isLogin: NULL,
    isGuest: NULL,
  },
  effects_UNSTABLE: [persistAtom('isLogin')],
});

export const useAccountState = () => {
  return useRecoilState(activeRouteState);
};

export const useAccountValue = () => {
  return useRecoilValue(activeRouteState);
};

export const useSetAccountState = () => {
  return useSetRecoilState(activeRouteState);
};
