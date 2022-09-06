import './StudentInfo.css'

export default function StudentInfo({ student }) {
    return (

        <tr>
            <td>{student.name}</td>
            <td><img src="{student.img}"></img></td>
            <td>{student.notes}</td>
        </tr>

    )
}