import './StudentInfo.css'

export default function StudentInfo({ student }) {
    return (

        <tr>
            <td>{student.name}</td>
            <td><img className="student-img" src={student.img} /></td>
            <td>{student.notes}</td>
        </tr>

    )
}