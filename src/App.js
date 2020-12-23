import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const [books, setBooks] = useState([])
  const fetchData = _ => {
    axios.get(apiURL).then(response => setBooks(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderBooks = _ => {
    if (Object.keys(books).length === 0 && books.constructor === Array) return


    return (
      <div>
        {books.map((book, index) =>
          <div key={index}>
            <p>Name: <a href={book.url}>{book.name}</a></p>
            <p>ISBN: {book.isbn}</p>
            <p>Authors: {book.authors.join(', ')}</p>
            <p># Pages: {book.numberOfPages}</p>
            <hr />
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="App" >
      {/* <button className="fetch-button" onClick={fetchData}>Fetch Data</button> */}
      <div>
        {renderBooks()}
      </div>
    </div>
  )
}
export default App;
