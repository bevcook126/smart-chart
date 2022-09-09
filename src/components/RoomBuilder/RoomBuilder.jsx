import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import  StudentInfo  from '../StudentInfo/StudentInfo';
import { Responsive, WidthProvider } from "react-grid-layout";
import * as studentsAPI from "../../utilities/students-api";
import * as desksAPI from "../../utilities/desks-api";
import './RoomBuilder.css';


export const RoomBuilder = ({student, setSelectStudent }) => {
    const [room, setRoom] = useState([
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null
    ])
    const [desk, setDesk] = useState(null) 
    // const [userDesks, setUserDesks] = useState([])
    const [selectedDesk, setSelectedDesk] = useState(null)
    const [updatedDesk, setUpdatedDesk] = useState(null)

    async function updateDesk(editData) {
        const deskToUpdate = await desksAPI.updateDesk(editData)
        const updatedDesk = (d => d._id === deskToUpdate._id ? deskToUpdate : d)
        setUpdatedDesk(updatedDesk)
      }


    // const handleClick = () => {
    //     setSelectedDesk(room[{desk}]);
    // }

    const handleSubmit = (deskId) => {
        console.log('test', {student})
        setDesk({student});
        setUpdatedDesk(student);
        const tempRoom = room.map(x=>x)
        tempRoom[deskId] = student;
        setRoom(tempRoom);
        // handleClick();
        console.log({desk})
        // evt.preventDefault();
    };


    // function handleSelectStudent(student) {
    //     setSelectStudent(student);
    // }

    
// room.map, foreach object in room array, render a div. handleSubmit
return  (
    <div className="room">
        {room.map((desk, idx) => (
            <div onClick={() => handleSubmit(idx)} key={idx} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.img})` : 'none' }}></div>
        ))}
        {/* <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.student.img})` : 'none' }}></div> */}
    </div>
    )
}

export default RoomBuilder;
