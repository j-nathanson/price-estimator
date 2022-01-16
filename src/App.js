import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux'
import { ADD_TODO, TOGGLE_COMPLETE } from './redux/todoSlice'

function App() {
  const todos = useSelector((state) => state.todoReducer.todoList);
  const [todoInput, setTodoInput] = useState('')
  const dispatch = useDispatch();

  console.log(todoInput);

  const handleSubmit = () => {
    console.log("handle submit is being called")
    if (todoInput.length > 0) {
      dispatch(ADD_TODO(todoInput))
    }
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
      <button onClick={() => handleSubmit()}>Add Task</button>


    </div>
  );
}

export default App;
