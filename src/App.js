import React, { useState } from "react";
import Counter from './Counter';
import Total from './Total';
import "./App.css";

  const App = () => {
    let data=[
      { id: 1, value: 1 },
      { id: 2, value: 2},
      { id: 3, value: 3 },
      { id: 4, value: 4}
    ]

    const Counter = (props) => {

      const [value, setValue] = useState(props.value)
      
      const onIncrementHandler = () =>{
          setValue(value + 1)
          data = {id:1, value: data[0].value}
              console.log(['updatedData'],data)
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
                {console.log(['Value'],data)}
            </div>
            </div>
          );}
       
 return (
   <div>
     {data.map(counter => ( 
          <Counter 
            key={counter.id} 
            value={counter.value} 
            />
        ))}
       <Total value={data[0].value + data[1].value + data[2].value + data[3].value} />
   </div>
 )
  }
  
export default App;

