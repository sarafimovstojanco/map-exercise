import React from 'react';

function renderTableData(props) {
<<<<<<< HEAD
    return props.students.map((st, index) => {
=======
    let render = props.students.map((st, index) => {
>>>>>>> bdc48a0f4179aefb49bd433884aaf490663f6e2e
        const { userId, id, title, completed } = st
        return (
            <tr key={id + userId}>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{completed ? "✔️" : "❌"}</td>
            </tr>)
    })
<<<<<<< HEAD
=======
    if (!props.searching) {
        return render
    }
    else {
        return render[0]
    }
>>>>>>> bdc48a0f4179aefb49bd433884aaf490663f6e2e
}



export default renderTableData 