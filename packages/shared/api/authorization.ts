import { getCookie } from 'cookies-next';

const authorization = () => {
  return { Authorization: `Bearer ${getCookie('accessToken')}` };
};

export default authorization;
