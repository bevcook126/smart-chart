import { useState } from 'react';
import './StudentInfo.css'



export const StudentInfo = ({ student, students, idx, setSelectStudent, deleteStudent, selectStudent }) => {
    const [isActive, setIsActive] = useState([]);
    // const [inactive, setInactive] = useState(true);
    let clickedStudent;
    const handleClick = () => {
        setSelectStudent({student});
        isActive.shift();
        console.log('isActive[0] shift', isActive)
        isActive.unshift(student);
        console.log('isActive[0] unshift', isActive);
        let clickedStudent = isActive.find(student);
        console.log('isActive', isActive[0])
    };

    return (
        <>
            <div key={student.name}  students={students} idx={idx} 
            onClick={handleClick} 
            className={isActive[0] === students._id ?  'not-selected' : 'selected' }
            style= {{
                    backgroundImage: `url(${student.img})`,
                    // border: selectStudent === student ? 'solid rgb(245, 116, 46)' : 'solid black',
                    // boxShadow: isActive[0] ? 'none' : 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
                    // filter: isActive[0] ? 'drop-shadow(1px 2px 8px rgb(245, 116, 46))' : 'drop-shadow(1px 2px 8px #000000)'
                    }}>
                {student.name} <br />
            <button className="delete-btn" onClick={() => deleteStudent(student._id)} type="submit">❌</button>
            </div>
        </>
    )
}

export default StudentInfo;