import { useState } from 'react';
import * as data from './Data'
import RenderTableData from './RenderTableData';
import RenderTableHeader from './RenderTableHeader.js';
import './App.css';
import React from 'react'

const App = () => {
   const [students, setStudents] = useState(data.data)
   const [pageSize, setPageSize] = useState(Number(students.length)) 
   const [searchState, setSearchState] = useState({
     searching: false,
    })
    const [ascending, setAscending] = useState(true)
    
    const [keyword, setKeyword] = useState("")
    let [newData, setNewData] = useState([...students])
    console.log(['keyword'], keyword)

    const onChangeHandler = event => {
      newData=[...students]
      setKeyword(event.target.value)
      setNewData(newData.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword))));
      if(event.target.value.length >=1 )
      { 
        setSearchState({ inputValue: event.target.value, searching: true})
      }
      else {setSearchState({ inputValue: event.target.value, searching: false})}
    }

    
    // return(
    //   <input 
    //   type="text"
    //   value={keyword}
    //   placeholder= 'Text'
    //   onChange={onChangeHandler}
    //   />
    // )

    // var userId = students.map(item => item.userId);
    // var id = students.map(item => item.id);
    // var title = students.map(item => item.title);
    // var completed = students.map(item => item.completed);


    const onHeaderClick = headerName => {
      setStudents(sort(headerName))
    }

    const sort = param => {
      if(ascending){
        setAscending(false)
        return [].concat(students)
        .sort((a, b) => a[param] < b[param] ? 1 : -1)
        .map((item, i) => 
            item
        );
      }
      else {
        setAscending(true)
        return [].concat(students)
        .sort((a, b) => a[param] > b[param] ? 1 : -1)
        .map((item, i) => 
            item
        );
      }
    }
         return (     
        <div>
        <h1 id='title'>React Dynamic Table</h1>
        <input 
          type="text"
          value={keyword}
          id="search-input"
          placeholder="Search..."
          onChange={onChangeHandler}
        ></input>
        <table id='students'>
           <tbody>
           <tr>
             <RenderTableHeader
              onHeaderClick={onHeaderClick}
              students={students.slice(0, pageSize)}
              />
            </tr>
            <RenderTableData
            students={newData.slice(0, pageSize)}
            />
           </tbody>
           <select value={pageSize} onChange={event => setPageSize(event.target.value)} >
             {
               [10, 25, 50, 100, Number(students.length)].map(pageSize => (
                 <option key={pageSize} value={pageSize}>
                   Show: {pageSize}
                 </option>
               ))
             }
           </select>
        </table>
     </div>
      )
   }

export default App