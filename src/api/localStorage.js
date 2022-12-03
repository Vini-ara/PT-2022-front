import { api } from "./api";

const saveToken = (token) => {
  api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  localStorage.setItem('accessToken', token);
}

const saveExpiration = (expiresIn) => {
  const expirationTimeInMs = expiresIn * 1000 + new Date().getTime();

  localStorage.setItem('expirationTime', expirationTimeInMs);
}

const saveUserId = (userId) => {
  localStorage.setItem('userId', userId);
}

const getToken = () => {
  return localStorage.getItem('accessToken')
}

const getExpiration = () => {
  return localStorage.getItem('expirationTime');
}

const getUserId = () => {
  return localStorage.getItem('userId');
}

const isExpired = () => {
  return (new Date().getTime() > getExpiration());
}

const refresh = async () => {
  try {
    const { data } = await api.get('auth/refresh');

    saveToken(data.accessToken);
    saveExpiration(data.expiresIn);
  } catch(e) {
    return null;
  }
}

const clear = () => {
  localStorage.clear();
}

export const store = {
  saveToken,
  saveExpiration,
  saveUserId,
  getToken,
  getExpiration,
  getUserId,
  isExpired,
  refresh,
  clear
}
