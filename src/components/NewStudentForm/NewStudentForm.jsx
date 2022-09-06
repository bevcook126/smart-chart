import { useState } from "react";
import "./NewStudentForm.css";

export default function NewStudentForm( {addStudent} ) {
    const [newStudent, setNewStudent] = useState({
        name: "",
        img: "",
        notes: "",
        });

        function handleAddStudent(evt) {
            evt.preventDefault();
            addStudent(newStudent);
            setNewStudent({
              name: "",
              img: "",
              notes: ""
            });
          }
        
          function handleChange(evt) {
            setNewStudent({ ...newStudent, [evt.target.name]: evt.target.value });
          }
            

  return (
    <>
    <h3>Add New Student</h3>
    <form onSubmit={handleAddStudent} className="NewStudentForm">
        <label>Name:</label>
        <input
            name="name"
            value={newStudent.name}
            type="text"
            placeholder="First name Last name"
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
        <label>Notes:</label>
        <input
            name="notes"
            value={newStudent.notes}
            type="text"
            placeholder="Notes"
            onChange={handleChange}
        />
      <button type="submit">ADD STUDENT</button>
    </form>
    </>
  );

}