import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../redux/actions/AuthAction';
import YoutubeImg from '../LoginScreen/assets/youtube.png';
import './loginscreen.scss';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <div className='login'>
      <div className='login_container'>
        <img src={YoutubeImg} alt='YouTube Logo' />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project is made using YouTube API</p>
      </div> 
    </div>
  );
};

export default LoginScreen;
