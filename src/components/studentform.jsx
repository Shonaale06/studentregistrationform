import { useState } from "react";
import axios from "axios";

function Studentform({ getStudents }) {
  const [student, setStudent] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send POST request to add a new student
    await axios.post('http://localhost:5000/api/students', student);

    // Clear the form fields after submission
    setStudent({ name: '', email: '', phone: '' });

    // Call getStudents function to fetch the updated list of students
    getStudents();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={student.name}  
        onChange={handleChange} 
        placeholder="Name" 
        required 
        type="text"
      /><br />
      <input 
        name="email"  
        value={student.email} 
        onChange={handleChange} 
        placeholder="Email" 
        required 
        type="email"
      /><br />
      <input 
        name="phone"  
        value={student.phone} 
        onChange={handleChange} 
        placeholder="Phone" 
        required 
        type="tel"  // Phone number input
      /><br />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default Studentform;