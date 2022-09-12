import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/"><img className="logo" src="https://i.imgur.com/q3sCq8Q.png" /></Link>
      Welcome, {user.name}!&nbsp;&nbsp;
      <Link className="logout" to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}