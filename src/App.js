import React, { useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  
  const [books, setBooks] = useState('')
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const fetchData= () => {
    return axios.get(apiURL).then(response => setBooks(response.data))
  }
  
 books &&
    books.map((book, index) => {
      const cleanedDate = new Date(book.released).toDateString();
      const authors = book.authors.join(', ');
      const name = book.name
      const country = book.country
      const numberOfPages = book.numberOfPages
      console.log(['authors'], authors)
      console.log(['cleanedDate'], cleanedDate)
      console.log(['name'], name)
      console.log(['country'], country)
      console.log(['numberOfPages'], numberOfPages)
      
    })
//  const book = books.map((book, index) => {
//      date = book.released
//      authors = book.authors
//      name = book.name
//      country = book.country
//      numberOfPages = book.numberOfPages
//   })

  return (
    <div className="App" >
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
        <div>
          {books.cleanedDate}
        </div>
    </div>
)}
export default App;
