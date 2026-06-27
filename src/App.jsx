import { useState,useEffect } from 'react';
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index ))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TaskMan</h1>
        <p>Your friendly task manager</p>
      </header>

      <main className="app-body">
        <Taskform addTask={addTask} />
        <Tasklist
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <Progresstracker tasks={tasks} />

        {tasks.length > 0 && (
          <button className="clear-btn" onClick={clearTasks}>
            Clear All Tasks
          </button>
        )}
      </main>
    </div>
  )
}