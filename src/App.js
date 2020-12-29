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
     inputValue:'',
     searching: false
    })

    // var userId = students.map(item => item.userId);
    // var id = students.map(item => item.id);
    // var title = students.map(item => item.title);
    // var completed = students.map(item => item.completed);

    function onChangeHandler (event) {
      if(event.target.value.length >=1 ){
        setSearchState({ inputValue: event.target.value, searching: true})
      }
      else {setSearchState({ inputValue: event.target.value, searching: false})}
    }

    const onHeaderClick = headerName => {
      setStudents(sort(headerName))
    }

    const sort = param => {
      return [].concat(students)
      .sort((a, b) => a[param] < b[param] ? 1 : -1)
      .map((item, i) => 
          item
      );
    }

      return (     
        <div>
        <h1 id='title'>React Dynamic Table</h1>
        <input 
          type="text"
          value={searchState.inputValue}
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
              pageSize={pageSize}/>

            </tr>
            <RenderTableData
            students={students.slice(0, pageSize)}
            pageSize={pageSize}
            filtered={searchState.inputValue.toLowerCase()}
            searching={searchState.searching}/>

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