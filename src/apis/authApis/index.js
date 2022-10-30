import { getService, postService } from '../../configs/connectApi';

export const loginApi = async body => {
  return await postService('auth/signIn', body);
};

export const getInfoProfile = () => {
  return getService('user/profile');
};
