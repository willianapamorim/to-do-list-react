import { useState, useEffect } from 'react'

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {

    // id, title, done

    setTasks([...tasks, {id: Date.now(), text: task, done: false}])

    // localStorage 

  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task))
  }

  return (
    <>
    <h1> Lista de Tarefas</h1>
    <TaskInput onAddTask={addTask}/>
    <TaskList tasks={tasks} 
    onDeleteTask={deleteTask} 
    onToggleTaskDone={toggleTaskDone}/>
    </>
  )
}

export default App
