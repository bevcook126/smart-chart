import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import  StudentInfo  from '../StudentInfo/StudentInfo';
import { Responsive, WidthProvider } from "react-grid-layout";
import './RoomBuilder.css';


export const RoomBuilder = ({student, setSelectStudent }) => {
    const [desk, setDesk] = useState(null) 

    function handleSubmit() {
        console.log('test')
        
    }
    return  (
    <div className="room">

        <input type="submit" onClick={handleSubmit} value="1" className="desk"></input>

        
    </div>
    )
}

export default RoomBuilder;
