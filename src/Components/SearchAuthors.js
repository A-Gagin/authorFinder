import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #ba7e5d 30%, #936639 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      //textTransform: 'capitalize',
    },
  })(Button);

function SearchAuthors(props) {

    const [search, setSearch] = useState("");

    const handleTitleSearch = (e) => {
        setSearch(e.target.value);
        (console.log("user input", search));
    }

    const url = new URL("http://localhost:8000/books");

    function requestAuthor() {
        url.searchParams.append("title", search.toLowerCase());
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                if (obj != null) {
                    console.log(obj);
                    if (obj.length === 0) {
                        obj = [{ title: "", author: "Book not found." }];
                    }
                    props.setBook(obj);
                } else {
                    console.log("Oops.")
                }
            });
    }

    const classes = useStyles();
    return (
        <div>
            <br></br>
            <div style={{ backgroundColor: "#cb997e", width: "50%", margin: "auto", padding: "10px", borderRadius: "15px" }}>
                <Typography variant="h2">Who Wrote That Book?</Typography>
            </div>

            <br />

            <div style={{ backgroundColor: "#d9baa5", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                <Typography variant="h6">Directions:</Typography>
                <Typography variant="h7">Input a book title in the box below and click the button to get its author.</Typography>
                <br /> <br />
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField id="outlined-search" label="Book Title" type="search" variant="outlined" style={{width: "auto"}} onChange={handleTitleSearch} />
                    </div>
                </form>
                <br />

                <StyledButton onClick={requestAuthor}>Search</StyledButton>
            </div>

        </div>
    );
}

export default SearchAuthors;