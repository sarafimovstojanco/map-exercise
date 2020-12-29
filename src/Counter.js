import React from 'react'
import classes from './App.css'

const Counter = (props) => {

const onAddHandler = () => {
  props.mapData(props.index, props.value.id, props.value.value + 1)
}

const onDeductandler = () => {
  props.mapData(props.index, props.value.id, props.value.value - 1)
}
return (
<div>
<button className={classes.Button} onClick={onDeductandler}>-</button>
<button  onClick={onAddHandler}>+</button>
{props.value.value}
</div>
)
}



export default Counter;