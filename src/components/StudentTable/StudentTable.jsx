import StudentInfo from '../StudentInfo/StudentInfo';
import './StudentTable.css';

export default function StudentTable({ students, setSelectStudent }) {
    const studentTableInfo = students.map((s, name) => (
        <StudentInfo student={s} key={name} setSelectStudent={setSelectStudent}/>
    ));
    return (
        <div className="student-table">
            {studentTableInfo}
        </div>
    )
}