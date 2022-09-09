import { Link } from 'react-router-dom';
import StudentInfo from '../StudentInfo/StudentInfo';
import './StudentTable.css';

export default function StudentTable({ students, name, setSelectStudent }) {
    const studentTableInfo = students.map((s, idx) => (
        <StudentInfo student={s} key={idx} idx={idx} students={students} setSelectStudent={setSelectStudent}/>
    ));
    return (
        <>
        <div className="student-table">
            {studentTableInfo}
        </div>
        <div>
            <h1>Student Info</h1>
        </div>
        </>
    )
}