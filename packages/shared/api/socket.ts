import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';
import authorization from './authorization';

const createSocket: any = () => {
  const ws = io('http://localhost:8080', {
    extraHeaders: authorization()
  });
  return ws;
};

export default createSocket;
