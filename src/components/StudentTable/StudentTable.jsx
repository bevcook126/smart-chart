import StudentInfo from '../StudentInfo/StudentInfo';
import './StudentTable.css';

export default function StudentTable({ students }) {
    const studentTableInfo = students.map((s, name) => (
        <StudentInfo student={s} key={name} />
    ));
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th className="info-img">📸</th>
                    <th className="info-notes">Notes</th>
                </tr>
                {studentTableInfo}
            </tbody>
        </table>
    )
}