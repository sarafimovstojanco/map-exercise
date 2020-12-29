import React from 'react'

const RenderTableHeader = (props) => {
   let header = ["userId", "id","title", "completed"];

   return header.map((key, index) => {
      return <th onClick={() => props.onHeaderClick(key)} key={index}>{key.toUpperCase()}</th>
   })
}

export default RenderTableHeader;