import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Task } from './components/Task';

function App() {

  const [homework, setHomework] = useState('')
  const [homeworks, setHomeworks] = useState([])

  const handleChange = e => {
    setHomework(e.target.value)
  }

  const addTask = e => {
    e.preventDefault();
    if(homework.trim()===''){
      alert('Debes agregar una tarea')
      return;
    }

    const newHomework = {
      id: Date.now(),
      homework,
      complete: false
    }

    const totalHomeworks = [newHomework, ...homeworks]
    setHomeworks(totalHomeworks);
    setHomework('');
  }

  const delateHomework = id => {
    const currentlyHomework = homeworks.filter(homework => {
      return homework.id===id
    })
    setHomeworks(currentlyHomework)
  }
  return (
    <>
      <h2>My To-Do List</h2>
      <Form
        handleChange = {handleChange}
        addTask = {addTask}
        homework = {homework}
      />
      {homeworks.length>1 &&(
        <button onClick={()=>setHomeworks([])}>Eliminar todas las tareas</button>
      )}
      {homeworks.map(homework => (
        <Task
          key={homework.id}
          id = {homework.id}
          homework = {homework}
          delateHomework = {delateHomework} 
        />
      ))}
    </>
  )
}

export default App;
