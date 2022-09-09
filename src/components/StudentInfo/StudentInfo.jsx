import { useState } from 'react';
import './StudentInfo.css'



export const StudentInfo = ({ student, students, name, idx, setSelectStudent }) => {
    const [isActive, setIsActive] = useState(false);
    const [inactive, setInactive] = useState(true);
    const handleClick = () => {
        setIsActive(current => !current);
        setInactive(current => !current);
        setSelectStudent({student});
        console.log('students', students);
        console.log('student',student);
    };

    return (
        <>
            <div key={student.name} idx={idx} onClick={handleClick} className="student-card"
                style= {{
                    backgroundImage: `url(${student.img})`,
                    border: isActive ? 'solid rgb(245, 116, 46)' : 'solid black',
                    boxShadow: isActive ? 'none' : 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
                    filter: isActive ? 'drop-shadow(1px 2px 8px rgb(245, 116, 46))' : 'drop-shadow(1px 2px 8px #000000)'
                    }}>
                {student.name}
            </div>
        </>
    )
}

export default StudentInfo;