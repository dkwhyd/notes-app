import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: 'USER_LOGOUT' });
    navigate('/');
  }, []);

  return null;
}
