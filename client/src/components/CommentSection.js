import '../css/Misc.css';
import React, {useState, useEffect} from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';


function CommentSection(props) {

    const [comments, setComments] = useState();

    useEffect(() => {
        fetch(`/post/comments/${props.id}`)
        .then(response => response.json())
        .then(data => setComments(data));
    }, []);

    function commentFormat (items) {
        if (comments){
            console.log(items);
            
            return items.map((contents) =>
                <Comment contents={contents}/>
            );
        }
    } 
    
    return (
        <div>
            <CommentForm id={props.id}/>
            <h2> Comments </h2>
            <div className='flex'>
                {commentFormat(comments)}
            </div>
        </div>
    );
}

export default CommentSection;