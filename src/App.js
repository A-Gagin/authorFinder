import './App.css';
import React, { useState } from 'react';
import DisplayAuthor from './Components/DisplayAuthor';
import SearchAuthors from './Components/SearchAuthors';

function App() {
  const [book, setBook] = useState(null);

  return (
    <div className="App">
      {/* <input onChange={handleTitleSearch}/>
      <button onClick={searchAuthors}>Search for Author</button>
      {result} */}
      <SearchAuthors setBook={setBook}/>
      <DisplayAuthor book={book}/>
      
    </div>
  );
}

export default App;
