import authorization from '../../api/authorization';
import { server } from '../../api/instance';

export const getUser = async () => {
  const { data } = await server.get('/auth', {
    headers: authorization()
  });
  return data;
};
