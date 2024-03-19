import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Lista de Tarefas</h1>
    <TaskInput />
    <TaskList />
    </>
  )
}

export default App
