import { useState } from 'react';
import './StudentInfo.css'



export const StudentInfo = ({ room, isActive, setIsActive, student, students, idx, setSelectStudent, deleteStudent, selectStudent }) => {
    let clickedStudent;



    const handleClick = () => {
        setSelectStudent({student});
        isActive.unshift(student);
        console.log(student)
        console.log(room)
    };

    return (
        <>
            <div key={student.name} room={room} students={students} idx={idx} 
            onClick={handleClick} 
            className={isActive[0] === student ? 'selected' : 'not-selected' }
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