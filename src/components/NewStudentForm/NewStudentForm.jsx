import { useState } from "react";
import StudentInfo from "../StudentInfo/StudentInfo";
import "./NewStudentForm.css";

export default function NewStudentForm( {addStudent, students, user} ) {
    const [newStudent, setNewStudent] = useState({
        name: "",
        img: "",
        });

        function handleAddStudent(evt) {
            evt.preventDefault();
            addStudent(newStudent);
            setNewStudent({
              name: "",
              img: "",
            });
          }
        
          function handleChange(evt) {
            setNewStudent({ ...newStudent, [evt.target.name]: evt.target.value });
          }
            

  return (
    <>
    <form onSubmit={handleAddStudent} className="NewStudentForm">

        <label>Name:</label>
        <input
            name="name"
            value={newStudent.name}
            type="text"
            placeholder="Student's Name"
            onChange={handleChange}
        />
        <label>Image:</label>
        <input
            name="img"
            value={newStudent.img}
            type="text"
            placeholder="Image URL"
            onChange={handleChange}
        />
        
          <button type="submit">SAVE STUDENT</button>
    </form>
    </>
  );

}