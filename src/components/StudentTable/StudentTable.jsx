import StudentInfo from '../StudentInfo/StudentInfo';
import './StudentTable.css';

export default function StudentTable({ students }) {
    const studentTableInfo = students.map((s, name) => (
        <StudentInfo student={s} key={name} />
    ));
    return (
        <div className="student-table">
            {studentTableInfo}
        </div>
    )
}