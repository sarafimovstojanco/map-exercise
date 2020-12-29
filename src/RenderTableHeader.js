import React from 'react'

function renderTableHeader(props) {
    let arr=props.students;
    let header = Object.keys(arr[0]);

    function sortTableData (arr) {
        var len = arr.length;
        for (var i = len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
             }
          }
        }
        return console.log(arr); }
  
    return header.map((key, index) => {
       return <th key={index} onClick={sortTableData}>{key.toUpperCase()}</th>
    })
 }

 export default renderTableHeader;