import StudentInfo from '../StudentInfo/StudentInfo';
import './StudentTable.css';

export default function StudentTable({ 
    room, 
    isActive, 
    setIsActive, 
    students, 
    name, 
    studentToDelete, 
    handleSelectStudent, 
    setStudents, 
    setSelectStudent, 
    selectStudent, 
    student, 
    deleteStudent 
}) {  
    const studentTableInfo = students.map((s, idx) => (
        <StudentInfo 
            room={room} 
            isActive={isActive} 
            setIsActive={setIsActive} 
            selectStudent={selectStudent} 
            deleteStudent={deleteStudent} 
            student={s} 
            key={idx} 
            idx={idx} 
            students={students} 
            setSelectStudent={setSelectStudent}
        />
    ));
    return (
        <>
            <div className="student-table">{studentTableInfo}</div>
        </>
    )
}