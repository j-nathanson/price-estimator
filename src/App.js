import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux'

import { changeGuestNum, toggleSides } from './redux/estimatorSlice'

function App() {
  const costPerGuest = useSelector(state => state.estimatorReducer.costs.costPerGuest);
  const guestNum = useSelector(state => state.estimatorReducer.guestNum);
  const isSideChecked = useSelector(state => state.estimatorReducer.isSideChecked);
  const sideCost = useSelector(state => state.estimatorReducer.costs.sideCost);
  const dispatch = useDispatch();

  const total = () => {
    let cost = guestNum * costPerGuest;
    if (isSideChecked) {
      cost += sideCost
    }
    return cost
  }

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
        <label htmlFor="sides">sides</label>
        <input type="checkbox" id="sides" onChange={() => dispatch(toggleSides())} />
        <label htmlFor="entrees">entrees</label>
        <input type="checkbox" id="sides" />
        <label htmlFor="desserts">desserts</label>
        <input type="checkbox" id="sides" />
      </div>

      <h2>Final cost: ${total()}</h2>
    </div>
  );
}

export default App;
