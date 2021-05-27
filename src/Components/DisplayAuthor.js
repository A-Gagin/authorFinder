import { Typography } from '@material-ui/core';

function Format(title) {
    // properly formats book titles
    // since the field 'title' of each book is lowercased to enable non case specific searches...
    // capitalize the first letter and the letter after every space
    // unless the word after the space is: a, of, or, to, and, the
    title = title.charAt(0).toUpperCase() + title.slice(1);
    let i = 0;
    for (i = 0; i < title.length; i++) {
        if (title.charAt(i) === ' ' &&
            title.substring(i + 1, i + 3) !== "a " &&
            title.substring(i + 1, i + 3) !== "of" &&
            title.substring(i + 1, i + 3) !== "or" &&
            title.substring(i + 1, i + 3) !== "to" &&
            title.substring(i + 1, i + 4) !== "and" &&
            title.substring(i + 1, i + 4) !== "the") {

            title = title.slice(0, i + 1) + title.charAt(i + 1).toUpperCase() + title.slice(i + 2);
        }
    }

    return title;
}

function DisplayAuthor(props) {
    let result = "";
    let title = "";
    console.log("DisplayAuthor props", props);
    if (props.book != null) {
        result = props.book[0].author;
        if (props.book[0].title !== "") {
            title = " wrote " + Format(props.book[0].title) + "."
        }
    }
    console.log("displayAuthor result", result);
    return (
        <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
            <Typography variant="h4">{result} {title}</Typography>
        </div>
    );
}

export default DisplayAuthor;