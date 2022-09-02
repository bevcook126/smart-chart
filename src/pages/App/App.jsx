import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewRoomPage from '../NewRoomPage/NewRoomPage';
import HomePage from '../HomePage/HomePage';
import LayoutPage from '../LayoutPage/LayoutPage';
import NavBar from '../../components/NavBar/NavBar';
import StudentListPage from '../StudentListPage/StudentListPage';
import RosterPage from '../RosterPage/RosterPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [classroom, setClassroom] = useState([]);


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/rooms/new' element={<NewRoomPage />} />
            <Route path='/rooms' element={<HomePage />} classroom={classroom} />
            <Route path='/students' element={<StudentListPage />} />
            <Route path='/rooms/:id' element={<LayoutPage />} />
            <Route path='/students/:id' element={<RosterPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
