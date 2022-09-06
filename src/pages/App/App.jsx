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
import RosterCard from '../../components/RosterCard/RosterCard';
import NewStudentForm from '../../components/NewStudentForm/NewStudentForm';
import RoomBuilder from '../../components/RoomBuilder/RoomBuilder';
import StudentInfo from '../../components/StudentInfo/StudentInfo';
import StudentTable from '../../components/StudentTable/StudentTable';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [classroom, setClassroom] = useState([]);
  const [students, setStudents] = useState([{ 
    name: "George Costanza", 
    img: "https://static.wikia.nocookie.net/seinfeld/images/7/76/George-costanza.jpg/revision/latest/top-crop/width/360/height/360?cb=20110406222711",
    notes: "angry"
}
]);

function addStudent(student) {
    const newStudents = [...students, student];
    setStudents(newStudents);
}
  


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <div className="home-page">
          <div className="left">
          <RoomBuilder />
          </div>
          <div className="right">
          <StudentTable students={students} />
          <NewStudentForm addStudent={addStudent} />
          </div>
          </div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
