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
      Welcome, {user.name}
      <Link to='/rooms'>Home</Link>
      <Link to='/students'>My Students</Link>
      <Link to='/rooms/new'>New Room</Link>
      <Link className="logout" to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}