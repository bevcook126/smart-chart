import { Link } from "react-router-dom";
import RosterPage from "../../pages/RosterPage/RosterPage";
import './ClassCard.css'

export default function ClassCard({classroom}) {
    return (
        <div className="class-card">
            {/* <Link><h3>{classroom.name} classroom.period ? 'Period {classroom.period}' : ''</h3></Link>
            <Link to={`/rooms/${classroom.roster}`}><h3>Roster</h3></Link> */}
            <h3>Classroom name</h3>
            <Link to='/rooms/:id'>Classroom</Link><br />
            <Link to='/students/:id'>Roster</Link>
        </div>
    )
}