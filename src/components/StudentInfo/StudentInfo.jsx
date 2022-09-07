
import { useDrag, useDrop } from "react-dnd";
import './StudentInfo.css';

export default function StudentInfo({ student, id }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'student',
        item: { student },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
            <div className="student-card" ref={dragRef} style={{backgroundImage: `url(${student.img})`}}>
                {student.name}
                {isDragging && '😱'}
            </div>
    )
}