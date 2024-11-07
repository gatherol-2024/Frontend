import { useQuery } from '@tanstack/react-query';
import { getUser } from '../service/user/api';
import { deleteCookie, getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import {
  clearUser,
  updateUser,
  useAppDispatch,
  useAppSelector
} from '../store';

const useUser = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const accessToken = getCookie('accessToken');

  const { data, ...restQuery } = useQuery({
    queryKey: ['user', accessToken],
    queryFn: getUser,
    enabled: !!accessToken
  });

  useEffect(() => {
    dispatch(updateUser(data));
  }, [data]);

  const logout = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    dispatch(clearUser());
  };
  return { user, ...restQuery, logout };
};

export default useUser;
