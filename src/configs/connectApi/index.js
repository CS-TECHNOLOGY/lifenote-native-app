import axios from 'axios';

export const HOST_API = 'https://dev-connect-server.herokuapp.com/';

const token = '';
export const postService = async (url, body, authentication = true) => {
  try {
    const headers = {
      //   Accept: 'application/json ',
      //   'Content-Type': 'application/json',
      //   ...(token && authentication ? { 'x-auth-token': token } : {}),
    };
    axios.defaults.withCredentials = true;

    const response = await axios.post(
      `${HOST_API + url}`,
      JSON.stringify(body),
      { headers },
    );
    if (response.status >= 200 && response.status <= 210 && response) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const res = error.response;
      throw res;
    }
    if (error.message) {
      throw error.message.toString();
    }

    throw JSON.stringify(error);
  }
};

export const getService = async (url, params) => {
  try {
    const headers = {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      //   ...(token ? { 'x-auth-token': token } : {}),
    };

    let queryString = '';
    if (params) {
      queryString = `?${Object.keys(params)
        .map(key => `${key}=${params[key] || ''}`)
        .join('&')}`;
    }
    const response = await axios.get(`${HOST_API}${url}${queryString}`, {
      headers,
      withCredentials: true,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const res = error.response;
      throw res;
    }
    if (error.message) {
      throw error.message.toString();
    }
    throw JSON.stringify(error);
  }
};
