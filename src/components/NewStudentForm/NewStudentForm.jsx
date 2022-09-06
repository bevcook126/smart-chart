import { useState } from "react";
import "./NewStudentForm.css";

export default function NewStudentForm() {
 
  return (
    <>
    <h3>Add New Student</h3>
    <form className="NewStudentForm">
        <label>Name:</label>
        <input
            name="name"
            type="text"
            placeholder="First name Last name"
        />
        <label>Image:</label>
        <input
            name="img"
            type="text"
            placeholder="Image URL"
        />
        <label>Class:</label>
        <select>
            <option>class</option>
        </select>
        <label>Notes:</label>
        <input
            name="notes"
            type="text"
            placeholder="Notes"
        />
      <button type="submit">ADD STUDENT</button>
    </form>
    </>
  );

}