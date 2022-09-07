import './StudentInfo.css'

export default function StudentInfo({ student }) {
    return (

        <tr>
            <td className="student-name">{student.name}</td>
            <td className="img-td"><img className="student-img" src={student.img} /></td>
            <td className="student-notes">{student.notes}</td>
        </tr>

    )
}