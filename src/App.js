import React, { useState } from "react";
import Total from './Total';
import "./App.css";

const App = () => {

  const [data, setData] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 }
  ])

  const updateObjectAtIndex = (index, id, value) => {
    // Finds the object inside the array and updates it
    data[index] = {id, value}
    
    // Updates the data state
    setData([...data])
  }

  return (
    <div>
      {data.map((counter, i) => (
        <Counter
          key={i}
          index={i}
          setData={updateObjectAtIndex}
          obj={counter}
        />
      ))}
      <Total value={data[0].value + data[1].value + data[2].value + data[3].value} />
    </div>
  )
}

const Counter = ({index, obj, setData}) => {
  const onIncrementHandler = _ => {
    setData(index, obj.id, obj.value + 1)
  }

  const onDecrementHandler = _ => {
    setData(index, obj.id, obj.value - 1)
  }

  return (
    <div className="counter">
      <div className="counter-controls">
        <button className="button is-danger is-small" onClick={onDecrementHandler}>-</button>
        <button className="button is-success is-small" onClick={onIncrementHandler}>+</button>
        {obj.value}
      </div>
    </div>
  );
}

export default App;

