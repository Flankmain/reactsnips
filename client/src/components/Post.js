//import '../css/Header.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import FormattedCode from './FormattedCode'
import '../css/Misc.css'

function Post(props) {

    const [contents, setContents] = useState({
        title:  "loading...",
        poster: "loading...",
        text:   "loading...",
    });

    useEffect(() => {
        fetch(`/post/${props.id}`)
        .then(response => response.json())
        .then((data) => {
            setContents(data);
        });
    }, []);


    return (
        <Link to={`/posts/${props.id}`} className="card clickable">
            <h4> {contents.title} </h4>
            <h6> Posted by {contents.poster} </h6>
            <FormattedCode code={contents.text}/>
        </Link>
    );
}

export default Post;