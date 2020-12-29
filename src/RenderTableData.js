import React from 'react';

function renderTableData(props) {
    return props.students.map((st, index) => {
        const { userId, id, title, completed } = st
        return (
            <tr key={id + userId}>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{completed ? "✔️" : "❌"}</td>
            </tr>)
    })
}



export default renderTableData 