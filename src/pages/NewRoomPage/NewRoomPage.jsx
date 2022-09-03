
import { useState, useEffect, useRef } from 'react';
import './NewRoomPage.css'
import RosterCard from '../../components/RosterCard/RosterCard';
import RoomBuilder from '../../components/RoomBuilder/RoomBuilder';


export default function NewRoomPage() {



  return (
    <section>
      <h1>NewRoomPage</h1>
      <div className="new-room-page">
       <RoomBuilder />
        <div className="class-list">
          Class List<br />
          <select>
            <option>Algebra 1, Period 1</option>
            <option>Algebra 1, Perdiod 2</option>
            <option>Calculus, Period 3</option>
            <option>Calculus, Period 4</option>
          </select>
          <RosterCard />
        </div>
      </div>

    </section>
  );
}