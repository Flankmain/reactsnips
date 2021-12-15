import '../css/Misc.css';
import React, {useState, useEffect} from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';


function CommentSection(props) {

    const [ids, setIds] = useState();

    useEffect(() => {
        fetch(`/post/comment-ids/${props.id}`)
        .then(response => response.json())
        .then(data => setIds(data));
    }, []);

    function listify (items) {
        if (ids) {
            return items.map((id) =>
                <Comment id={id}/>
            );
        }
    } 
    
    return (
        <div>
            <CommentForm id={props.id}/>
            <h2> Comments </h2>
            <div className='flex'>
                {listify(ids)}
            </div>
        </div>
    );
}

export default CommentSection;