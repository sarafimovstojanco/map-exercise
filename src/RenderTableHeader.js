import React from 'react'

const RenderTableHeader = (props) => {
   let arr = props.students;
   let header = Object.keys(arr[0]);

   return header.map((key, index) => {
      return <th onClick={() => props.onHeaderClick(key)} key={index}>{key.toUpperCase()}</th>
   })
}

export default RenderTableHeader;