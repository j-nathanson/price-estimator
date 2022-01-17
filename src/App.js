import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux'

import { changeGuestNum } from './redux/estimatorSlice'

function App() {
  const costPerGuest = useSelector(state => state.estimatorReducer.costs.costPerGuest);
  const guestNum = useSelector(state => state.estimatorReducer.guestNum);
  const dispatch = useDispatch();


  return (
    <div>
      <h1>price estimator</h1>
      <h2>How many guests will you have?</h2>
      <label htmlFor="guests"> Current guest count: {guestNum} </label>
      <div>
        <input
          id="guests"
          type="range"
          min="50"
          max="500"
          step="10"
          value={guestNum}
          onChange={(e) => dispatch(changeGuestNum(e.target.value))}
        />
      </div>

      <h2>Cost per Guest: ${costPerGuest}</h2>


      <h2>addons</h2>
      <div>
        <button>Sides</button>
        <button>Entrees</button>
        <button>Desserts</button>
      </div>

      <h2>Final cost: ${guestNum * costPerGuest}</h2>
    </div>
  );
}

export default App;
