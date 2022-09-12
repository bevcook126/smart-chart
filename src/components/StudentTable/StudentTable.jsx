import { Link } from 'react-router-dom';
import { useState } from 'react';
import StudentInfo from '../StudentInfo/StudentInfo';
import './StudentTable.css';

export default function StudentTable({ students, name, studentToDelete, handleSelectStudent, setStudents, setSelectStudent, selectStudent, student, deleteStudent }) {  
    const studentTableInfo = students.map((s, idx) => (
        <StudentInfo selectStudent={selectStudent} deleteStudent={deleteStudent} student={s} key={idx} idx={idx} students={students} 
        setSelectStudent={setSelectStudent}
        />
    ));
    return (
        <>
        <div className="student-table">
            {studentTableInfo}
        </div>
        </>
    )
}