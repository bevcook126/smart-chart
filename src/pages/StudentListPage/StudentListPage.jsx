import { useState } from "react";
import NewStudentForm from "../../components/NewStudentForm/NewStudentForm";
import StudentInfo from "../../components/StudentInfo/StudentInfo";
import './StudentListPage.css';

export default function StudentListPage({ students }) {
    const [student, setStudents] = useState([{ 
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
        <div>
        <h1>StudentListPage</h1>
        <NewStudentForm addStudent={addStudent}/>
        <h1>All Students</h1>
        <table>
            <tr>
                <th>Name</th>
                <th className="info-img">Image</th>
                <th>Class</th>
                <th className="info-notes">Notes</th>
            </tr>
            <StudentInfo student={student}/>
        </table>
        </div>
    )
}