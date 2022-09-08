import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import  StudentInfo  from '../StudentInfo/StudentInfo';
import { Responsive, WidthProvider } from "react-grid-layout";
import './RoomBuilder.css';


export const RoomBuilder = ({student, setSelectStudent }) => {
    const [desk, setDesk] = useState({
        student: {}
      }) 

    const handleSubmit = evt => {
        console.log('test', {student})
        setDesk({student});
        // ^ SET DESK IS NOT WORKING!!!!
        console.log({desk})
        evt.preventDefault();
    };

    return  (
    <div className="room">

        <div onClick={handleSubmit} className="desk" 
        // style={{backgroundImage: `url(${desk.img})`}}
        ></div>

        
    </div>
    )
}

export default RoomBuilder;
