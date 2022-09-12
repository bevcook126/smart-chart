import { Link } from 'react-router-dom';
import { useState } from 'react';
import StudentInfo from '../StudentInfo/StudentInfo';
import './StudentTable.css';

export default function StudentTable({ students, name, setSelectStudent, student }) {
    const [isActive, setIsActive] = useState(false);
    const [inactive, setInactive] = useState(true);
    const handleClick = () => {
        setIsActive(current => !current);
        setInactive(current => !current);
        setSelectStudent({student});
        console.log('students', students);
        console.log('student',student);
    };
    
    const studentTableInfo = students.map((s, idx) => (
        <StudentInfo student={s} key={idx} idx={idx} students={students} setSelectStudent={setSelectStudent}/>
    ));
    return (
        <>
        <div className="student-table">
            {studentTableInfo}
        </div>
        <div className="delete">
            <div className="delete-select">
                <label>Student: </label>
                <select>
                    {students.map((s, idx) => (
                <option student={s} key={idx} idx={idx} students={students}>{s.name}</option>
                    ))}
                </select>
            </div>
            <button>DELETE STUDENT</button>
        </div>
        </>
    )
}