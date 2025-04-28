import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/studentform';
import StudentList from './components/studentlist';
import EditStudentForm from './components/studentedit';
import './App.css'
function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const getStudents = async () => {
    const res = await axios.get('http://localhost:5000/api/students');
    setStudents(res.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>
      {editing ? (
        <EditStudentForm
          selectedStudent={selectedStudent}
          getStudents={getStudents}
          setEditing={setEditing}
        />
      ) : (
        <StudentForm getStudents={getStudents} />
      )}
      <StudentList
        students={students}
        getStudents={getStudents}
        setSelectedStudent={setSelectedStudent}
        setEditing={setEditing}
      />
    </div>
  );
}

export default App;
