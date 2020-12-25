import React, { useState } from 'react'
import Total from './Total'

const Counter = (props) => {

    const [value, setValue] = useState(props.value)
    
    const onIncrementHandler = () =>{
        setValue(value + 1)
          }
    const onDecrementHandler = () =>{
        setValue(value - 1)
        }
    
    return (
      <div className="counter">
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={onDecrementHandler}>-</button>
          <button className="button is-success is-small" onClick={onIncrementHandler}>+</button>
          {value}
      </div>
      </div>
    );
  }

  export default Counter