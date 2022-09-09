import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import  StudentInfo  from '../StudentInfo/StudentInfo';
import { Responsive, WidthProvider } from "react-grid-layout";
import * as studentsAPI from "../../utilities/students-api";
import * as desksAPI from "../../utilities/desks-api";
import * as roomsAPI from "../../utilities/rooms-api";
import './RoomBuilder.css';


export const RoomBuilder = ({
    student, 
    setSelectStudent, 
    user, 
    userRooms, 
    setUserRooms 
}) => {
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
    // const [desk, setDesk] = useState(null) 
    // // const [userDesks, setUserDesks] = useState([])
    // const [selectedDesk, setSelectedDesk] = useState(null)
    // const [updatedDesk, setUpdatedDesk] = useState(null)
    // const [updatedRoom, setUpdatedRoom] = useState(null)

    // async function updateDesk(editData) {
    // const deskToUpdate = await desksAPI.updateDesk(editData)
    // const updatedDesk = (d => d._id === deskToUpdate._id ? deskToUpdate : d)
    //     setUpdatedDesk(updatedDesk)
    // }

    async function updateRoom(editData) {
        const roomUpdate = await roomsAPI.updateRoom(editData)
        // const updatedRoom = (r => r._id === roomUpdate._id ? roomUpdate : r)
        // setUpdatedRoom(updatedRoom)
    }

    useEffect(function () {
        // if (!user) {
        //     console.log(user)
        //     return
        // }
        async function getRooms() {
            const rooms = await roomsAPI.getAll();
            console.log('rooms.layout', rooms)
            setRoom(rooms.layout)
        }
        getRooms()
    }, [])


    const handleSubmit = (deskId, updatedRoom) => {
        console.log('test', {student})
        // setDesk({student});
        // setUpdatedDesk(student);
        const tempRoom = room.map(x=>x)
        tempRoom[deskId] = student;
        setRoom(tempRoom);
        // console.log({desk})
        console.log(room);
        // setUserRooms(room);
    }

    const unassocStudent = (deskId) => {
        const tempRoom = room.map(x=>x)
        tempRoom[deskId] = null;
        setRoom(tempRoom)
    }




        
    function handleSave() {
        updateRoom(room);          
    }





    // function handleSelectStudent(student) {
    //     setSelectStudent(student);
    // }

    // useEffect to call backend and see if user already has a list.
    // if they have a list, use setRoom to update room 

    // div desk.student ==! null ? {()=> handleSubmit, background} : {() => unassoc, background none} 

// room.map, foreach object in room array, render a div. handleSubmit



// {if (desk == null) return {
        
//     onClick={() => handleSubmit(idx)} key={idx} className="desk" style={{backgroundImage: `url(${desk.student.img})` }}
//     else {
//     onClick={() => unassocStudent(idx)} key={idx} className="desk" style={{backgroundImage: 'none' }}}}}

return  (
    <>
    <div className="room">
        {room.map((desk, idx) => (
            <div onClick=
            {desk == null && desk !== student ? () => handleSubmit(idx) : () => unassocStudent(idx)} key={idx} className="desk" style={{backgroundImage: desk !== null ? `url(${desk.student.img})` : 'none' }}
        ></div>
        ))}
    </div>
    <button onClick={handleSave}>SAVE ROOM</button>
    </>
    )
}

export default RoomBuilder;
