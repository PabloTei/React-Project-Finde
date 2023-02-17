import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/userContext";

const Header = () => {
    const { user, logout } = useContext(UserContext);
    return <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>  
                </li>
                <li>
                    {user && <NavLink to="/monsters">Monsters</NavLink>}
                    
                </li>
                <li>
                    {user && <NavLink to="/equipment">Equipment</NavLink>}
                </li>
            </ul>
            {user && <button onClick={() => logout()}>Logout</button>}
        </nav>
    </header>
}

export default Header;
