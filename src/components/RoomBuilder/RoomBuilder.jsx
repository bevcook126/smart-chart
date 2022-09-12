import React, { useState, useEffect } from 'react'
import * as roomsAPI from "../../utilities/rooms-api";
import './RoomBuilder.css';


export const RoomBuilder = ({student}) => {
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


    async function updateRoom(editData) {
        const roomUpdate = await roomsAPI.updateRoom(editData)

    }

    useEffect(function () {
        async function getRooms() {
            const rooms = await roomsAPI.getAll();
            console.log('rooms.layout', rooms)
            setRoom(rooms.layout)
        }
        getRooms()
    }, [])


    const handleSubmit = (deskId) => {
        console.log('test', {student})
        const tempRoom = room.map(x=>x)
        tempRoom[deskId] = student;
        setRoom(tempRoom);
    }

    const unassocStudent = (deskId) => {
        const tempRoom = room.map(x=>x)
        tempRoom[deskId] = null;
        setRoom(tempRoom)
    }




        
    function handleSave() {
        updateRoom(room);          
    }

    function handleClear() {
        setRoom([
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
    }






return  (
    <>
    <div className="room">
        {room.map((desk, idx) => (
            <div onClick=
            {desk == null || desk !== student ? 
                () => handleSubmit(idx) : () => unassocStudent(idx)} 
            key={idx} className="desk" 
            style={{backgroundImage: desk !== null ? `url(${desk.student.img})` : 'none' }}
        ></div>
        ))}
    </div>
    <div className="room-buttons">
    <button onClick={handleClear}>CLEAR ROOM</button>
    <button onClick={handleSave}>SAVE ROOM</button>
    </div>
    </>
    )
}

export default RoomBuilder;
