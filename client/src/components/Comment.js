import '../css/Misc.css'

function Comment(props) {

    var contents = props.contents;

    return (
        <div className='card'>
            <h6> {contents.poster} said:</h6>
            {contents.text}
        </div>
    );
}

export default Comment;