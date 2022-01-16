import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux'
import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_TASKS, DELETE_TASKS, DELETE_SINGLE_TASK } from './redux/todoSlice'
// clone
function App() {
  const todos = useSelector((state) => state.todoReducer.todoList);
  const [todoInput, setTodoInput] = useState('');
  const dispatch = useDispatch();

  console.log(todoInput);

  const handleSubmit = () => {
    console.log("handle submit is being called")
    if (todoInput.length > 0) {
      dispatch(ADD_TODO(todoInput))
    }
    setTodoInput('');
  }

  return (
    <div>
      <h1>React Redux-ToolKit todo list</h1>
      <h2>Things to do</h2>
      <div>
        <ul>
          {todos.map((task, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={task.complete}
                  onChange={() => dispatch(TOGGLE_COMPLETE(index))}
                />
                {task.activity}
                <button
                  onClick={() => dispatch(DELETE_SINGLE_TASK(index))}
                >Delete Task
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <h2>Add a Task</h2>
      <input
        type="text"
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      />
      <div>
        <button onClick={() => handleSubmit()}>Add Task</button>
        <button onClick={() => dispatch(CLEAR_TASKS())}>Clear Completed Tasks</button>
        <button onClick={() => dispatch(DELETE_TASKS())}>Delete All Tasks</button>
      </div>

    </div>
  );
}

export default App;
