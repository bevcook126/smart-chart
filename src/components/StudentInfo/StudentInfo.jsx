import { useState } from 'react';
import './StudentInfo.css'



export const StudentInfo = ({ student, students, idx, setSelectStudent, deleteStudent, selectStudent }) => {
    const [isActive, setIsActive] = useState(null);
    // const [inactive, setInactive] = useState(true);
    let clickedStudent;
    const handleClick = () => {
        setSelectStudent({student});
        setIsActive(current => !current);
        console.log(student)

    };

    return (
        <>
            <div key={student.name}  students={students} idx={idx} 
            onClick={handleClick} 
            className={isActive ? 'selected' : 'not-selected' }
            style= {{
                    backgroundImage: `url(${student.img})`
                    }}>
                {student.name} <br />
            <button className="delete-btn" onClick={() => deleteStudent(student._id)} type="submit">❌</button>
            </div>
        </>
    )
}

export default StudentInfo;