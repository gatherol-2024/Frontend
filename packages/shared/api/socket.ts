import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';

const createSocket: any = () => {
  const ws = io('http://localhost:8080', {
    extraHeaders: { Authorization: `Bearer ${getCookie('accessToken')}` }
  });
  return ws;
};

export default createSocket;
