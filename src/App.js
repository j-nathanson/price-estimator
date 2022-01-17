import './App.css';
import React, { useState } from 'react';
 import { useSelector, useDispatch, } from 'react-redux'
// import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_TASKS, DELETE_TASKS, DELETE_SINGLE_TASK } from './redux/todoSlice'
// clone
function App() {
  // const todos = useSelector((state) => state.todoReducer.todoList);
  // const [todoInput, setTodoInput] = useState('');
  const dispatch = useDispatch();


  return (
    <div>
      <h1>price estimator</h1>

      <h2>guests</h2>

      <h2>addons</h2>
      <div>
        <button>Sides</button>
        <button>Entrees</button>
        <button>Desserts</button>
      </div>

      <h2>Final cost</h2>
    </div>
  );
}

export default App;
