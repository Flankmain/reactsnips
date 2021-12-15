import '../css/Misc.css'
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import FormattedCode from './FormattedCode'
import CommentSection from './CommentSection';


function PostPage() {
    const params = useParams();
    const [contents, setContents] = useState({
        title:  "loading...",
        poster: "loading...",
        text:   "loading...",
    });

    useEffect(() => {
        fetch(`/post/${params.id}`)
        .then(response => response.json())
        .then((data) => {   
            setContents(data);
        });
    }, []);


    return (
        <div className='content'>
            <div className="card">
                <h4> {contents.title} </h4>
                <h6> Posted by {contents.poster} </h6>
                <FormattedCode code={contents.text}/>
            </div>
            <CommentSection id={params.id}/>
        </div>
    );
}

export default PostPage;