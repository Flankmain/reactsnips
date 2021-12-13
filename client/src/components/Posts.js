//import '../css/Header.css';
import React, {useState, useEffect} from 'react';

import Post from './Post';
import PostForm from './PostForm';

import '../css/Misc.css';

function Posts(props) {

    const [ids, setIds] = useState();

    useEffect(() => {
        fetch('/post/ids')
        .then(response => response.json())
        .then(data => setIds(data));
    },[]);

        function listify (items) {
            if (ids){
                return items.map((id) =>
                    <Post id={id}/>
                );
            }
        } 
    
    return (
        <div className='content'>
            <h2> Posts </h2>
            <div className='flex'>
                <PostForm/>
                {listify(ids)}
            </div>
        </div>
    );
}

export default Posts;