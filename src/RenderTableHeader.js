import React from 'react'

const RenderTableHeader = (props) => {
<<<<<<< HEAD
   let header = ["userId", "id","title", "completed"];
=======
   let arr = props.students;
   let header = Object.keys(arr[0]);
>>>>>>> bdc48a0f4179aefb49bd433884aaf490663f6e2e

   return header.map((key, index) => {
      return <th onClick={() => props.onHeaderClick(key)} key={index}>{key.toUpperCase()}</th>
   })
}

export default RenderTableHeader;