import React, {useState, useEffect} from 'react';

function Comments() {
    
    //const [comments, setComments] = useState();
    const [comments, setComments] = useState();

    useEffect(() => {
        fetch('/post/REPLACETHIS')
        .then(response => response.json())
        .then(items => setComments(items));
    },[]);

    function listify (items) {
        if (comments){
            return items.map((item) => 
                <li key={item.id}>
                    <h5>{item.poster}</h5>
                    <br/>
                    <text>{item.text}</text>
                </li>
            );
        }
    }

    return (
        <div>
            <h4>Comments.</h4>
            {listify(comments)}
        </div>
    );

    /*
    <ul>
        {comments.map((com) => (
        <h4>{com.title}</h4>
        <code>{com.text}</code>
        )}
    </ul>
    */
}

export default Comments;