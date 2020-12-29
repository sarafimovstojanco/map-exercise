import React from 'react';

function renderTableData(props) {
    let render = props.students.map((st, index) => {
        const { userId, id, title, completed } = st
        return (
            <tr key={id + userId}>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{completed ? "✔️" : "❌"}</td>
            </tr>)
    })
    if (!props.searching) {
        return render
    }
    else {
        return render[0]
    }
}



export default renderTableData 