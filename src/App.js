import './App.css';
import React, { useState } from 'react';
import DisplayAuthor from './Components/DisplayAuthor';
import SearchAuthors from './Components/SearchAuthors';

function App() {
  const [book, setBook] = useState(null);

  return (
    <div className="App" style={{backgroundImage: `url(https://wallpapercave.com/wp/wp4426455.jpg)`}} >
      
      <SearchAuthors setBook={setBook}/> <br />
      <DisplayAuthor book={book}/> <br />
      
    </div>
  );
}

export default App;
