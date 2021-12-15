import '../css/Misc.css'
import React, {useState, useEffect} from 'react';

function Comment(props) {

    const [contents, setContents] = useState({
        title:  "loading...",
        poster: "loading...",
        text:   "loading...",
        time:   "loading..."
    });

    useEffect(() => {
        fetch(`/post/${props.id}`)
        .then(response => response.json())
        .then((data) => {
            setContents(data);
        });
    }, []);

    return (
        <div className='card'>
            <h6> {contents.poster} @ {contents.time}</h6>
            {contents.text}
        </div>
    );
}

export default Comment;