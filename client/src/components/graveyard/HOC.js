import React from 'react';

function HOC(Component, props) {

    console.log(Component)

    return (
        <div className='wrapper'>
            <Component name={props.name}/>
        </div>
    );
}

export default HOC;
