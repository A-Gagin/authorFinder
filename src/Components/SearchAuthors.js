import React, { useState } from 'react';
function SearchAuthors(props) {

    const [search, setSearch] = useState("");

    const handleTitleSearch = (e) => {
        setSearch(e.target.value);
        (console.log("user input", search));
    }
    
    const url = new URL("http://localhost:8000/books");

    function requestAuthor(){
        url.searchParams.append("title", search);
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                if (obj != null){
                    console.log(obj);
                    props.setBook(obj);
                } else {
                    console.log("Oops.")
                }
            });
    }


    return (
        <div>
            <input onChange={handleTitleSearch} />
            <button onClick={requestAuthor}>Search for Author</button>
        </div>
    );
}

export default SearchAuthors;