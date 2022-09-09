import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewStudentForm from '../../components/NewStudentForm/NewStudentForm';
import RoomBuilder from '../../components/RoomBuilder/RoomBuilder';
import StudentTable from '../../components/StudentTable/StudentTable';
import * as studentsAPI from '../../utilities/students-api'
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [classroom, setClassroom] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectStudent, setSelectStudent] = useState(null);
  const [selectDesk, setSelectDesk] = useState(null);
async function addStudent(student) {
    const newStudents = await studentsAPI.addStudent(student);
    setStudents([...students, newStudents]);
}
  
useEffect(function() {
  async function getStudents() {
    const allStudents = await studentsAPI.getAll();
    setStudents(allStudents)
  }
  getStudents()
}, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <div className="home-page">
            <div className="left">
              <RoomBuilder student={selectStudent} setSelectStudent={setSelectStudent} desk={selectDesk} setSelectDesk={setSelectDesk} />
            </div>
            <div className="right">
              <NewStudentForm addStudent={addStudent} />
                <StudentTable setSelectStudent={setSelectStudent} students={students} />
            </div>
          </div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
