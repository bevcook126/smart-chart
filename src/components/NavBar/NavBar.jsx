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
      <br />
      Welcome, {user.name}!&nbsp;&nbsp;
      <b>SMART CHART</b>
      <Link className="logout" to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}