import './Home.css';

import { useContext } from 'react';

import { UserContext } from '../context/userContext';

const Home = () => {
  const { user } = useContext(UserContext);
  return <main className="home">Welcome {user}</main>;
};

export default Home;
