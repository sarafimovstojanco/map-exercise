const Total = (props) => {
    let total = 0;
    for (let id in props.data){
        total = total + props.data[id].value
    }
    return(
        total
    )
}

export default Total;