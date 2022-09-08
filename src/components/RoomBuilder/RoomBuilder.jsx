import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import  StudentInfo  from '../StudentInfo/StudentInfo';
import { Responsive, WidthProvider } from "react-grid-layout";
import * as studentsAPI from "../../utilities/students-api";
import * as desksAPI from "../../utilities/desks-api";
import './RoomBuilder.css';


export const RoomBuilder = ({student, setSelectStudent }) => {
    const [room, setRoom] = useState(null)
    const [desk, setDesk] = useState([
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
        {student: null}, {student: null}, {student: null}, {student: null}, {student: null},
    ]) 
    // const [userDesks, setUserDesks] = useState([])
    const [selectedDesk, setSelectedDesk] = useState(null)
    const [updatedDesk, setUpdatedDesk] = useState()

    async function updateDesk(editData) {
        const deskToUpdate = await desksAPI.updateDesk(editData)
        const updatedDesk = (d => d._id === deskToUpdate._id ? deskToUpdate : d)
        setUpdatedDesk(updatedDesk)
      }

    const handleSubmit = evt => {
        console.log('test', {student})
        setDesk({student});
        setUpdatedDesk({student});
        console.log({desk})
        evt.preventDefault();
    };


    function handleSelectStudent(student) {
        setSelectStudent(student);
    }

    

    return  (
    <div className="room">
        {/* <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.img})`}}></div> */}
        {/* <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div>
        <div onClick={handleSubmit} className="desk" style={{backgroundImage: `url(${desk.student.student.img})`}}></div> */}
    </div>
    )
}

export default RoomBuilder;
