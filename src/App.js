import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux'
// import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_TASKS, DELETE_TASKS, DELETE_SINGLE_TASK } from './redux/todoSlice'
// clone
function App() {
  // const todos = useSelector((state) => state.todoReducer.todoList);
  // const [todoInput, setTodoInput] = useState('');
  const [guestNum, setGuestNum] = useState(50)
  const dispatch = useDispatch();


  return (
    <div>
      <h1>price estimator</h1>
      <h2>How many guests will you have?</h2>
      <h3>Current guest count: {guestNum}</h3>
      <label htmlFor="guests"> </label>
      <input
        id="guests"
        type="range"
        min="50"
        max="500"
        value={guestNum}
        onChange={(e) => setGuestNum(e.target.value)}
      />


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
