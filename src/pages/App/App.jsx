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
  const [student, setStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectStudent, setSelectStudent] = useState(null);
  const [isActive, setIsActive] = useState([]);
  const [selectDesk, setSelectDesk] = useState(null);
  const [room, setRoom] = useState([
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null
])




async function addStudent(student) {
    const newStudents = await studentsAPI.addStudent(student);
    setStudents([...students, newStudents]);
}

async function deleteStudent(id) {
  const studentToDelete = await studentsAPI.deleteAStudent(id)
  const updatedStudents = students.filter(student => student._id !== studentToDelete._id)
  setStudents(updatedStudents);
}

useEffect(function() {
  async function getStudents() {
    const allStudents = await studentsAPI.getAll();
    setStudents(allStudents)
  }
  if (user) {
    getStudents();
  } else {
    setStudents([]);
  }
}, [user]);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <div className="home-page">
            <div className="left">
              <RoomBuilder 
                user={user} 
                student={selectStudent} 
                setSelectStudent={setSelectStudent} 
                desk={selectDesk} 
                setSelectDesk={setSelectDesk} 
                room={room}
                setRoom={setRoom}
                isActive={isActive}
                setIsActive={setIsActive}/>
            </div>
            <div className="right">
              <NewStudentForm addStudent={addStudent} students={students} user={user}/>
                <StudentTable 
                  setSelectStudent={setSelectStudent} 
                  isActive={isActive}
                  setIsActive={setIsActive}
                  deleteStudent={deleteStudent} 
                  setStudents={setStudents}
                  student={student}
                  room={room}
                  selectStudent={selectStudent}
                  students={students} />
            </div>
          </div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
