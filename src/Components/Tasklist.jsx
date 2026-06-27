import React from 'react'

const Tasklist = ({tasks, updateTask, deleteTask}) => {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed }
    updateTask(updatedTask, index)
  }
  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span className="task-title">{task.text || "Untitled task"}</span>
            <div className="task-meta">
              <span className="tag priority">{task.priority}</span>
              <span className="tag category">{task.category}</span>
            </div>
          </div>
          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Tasklist
