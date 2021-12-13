import React from 'react';
import '../css/List.css';

function List(props) {

    function listify (items) {
        return items.map((item) => 
            <li key={item.id.toString()}
                onClick={() => props.updateItem(item.id)}
                className={item.clicked ? 'Clicked' : 'Unclicked'}
                >{item.text}
            </li>
        );
    } 

    return (
        <div className="List">
            <h1>{props.header}</h1>
            <ul className='UL'>{listify(props.items)}</ul>
        </div>
    );
}

export default List;
