import './Login.css';

import { useContext, useRef } from 'react';

import { UserContext } from '../context/userContext';

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(UserContext);
  return (
    <main className="login">
      <img
        src="https://res.cloudinary.com/depifliz3/image/upload/v1676751056/samples/landscapes/185-1858014_legend-of-zelda-breath-of-the-wild-png_khuiwr.png"
        alt="fondo-zelda"
      />
      <input type="text" placeholder="Username" ref={inputRef} />
      <button onClick={() => login(inputRef.current.value)}>Login</button>
    </main>
  );
};

export default Login;
