import './Header.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../context/userContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header>
      <div className="img-logo">
        {user ? (
          <img
            src="https://res.cloudinary.com/depifliz3/image/upload/v1676753350/samples/landscapes/1176_t25kbz.png"
            alt="icon-zelda"
          />
        ) : (
          ''
        )}
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>{!user && <NavLink to="/login">Login</NavLink>}</li>
          <li>{user && <NavLink to="/monsters">Monsters</NavLink>}</li>
          <li>{user && <NavLink to="/equipment">Equipment</NavLink>}</li>
        </ul>
      </nav>
      {user && <button onClick={() => logout()}>Logout</button>}
    </header>
  );
};

export default Header;
