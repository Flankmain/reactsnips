//import '../css/Header.css';
import React, {useState, useEffect} from 'react';

function About(props) {

    const [lorems, setLorems] = useState();


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(lors => setLorems(lors));
    },[])

    function listify (items) {
        if (lorems){
            return items.map((item) => 
                <li
                    key={item.id}
                    >{item.title}
                </li>
            );
        }
    } 
    
    return (
        <div className="About">
            <ul>{listify(lorems)}</ul>
        </div>
    );
}

export default About;
