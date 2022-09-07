import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import  StudentInfo  from '../StudentInfo/StudentInfo';
import './RoomBuilder.css';

export default function RoomBuilder({students}) {
    const [room, setRoom] = useState([]);
    const [{ isOver }, dropRef] = useDrop({
        accept: 'student',
        drop: (item) => setRoom((room) =>
            !room.includes(item) ? [...room, item] : room),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return  (
    <div className="room" ref={dropRef}>
        <div className="desk">
        {room.map(student => <StudentInfo id={student.id} name={student.name} />)}
                {isOver && '.'}
        </div>
        
    </div>
    )
}
