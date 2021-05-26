function DisplayAuthor(props) {
    let result = "";
    console.log("DisplayAuthor props", props);
    if (props.book != null) {
        result = props.book[0].author;
    }
    console.log("displayAuthor result", result);
    return (
        result
    );
}

export default DisplayAuthor;