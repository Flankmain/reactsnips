import List from './TextList';
import React, { useState } from "react";

function Container(props) {


  const initialItems = [
    {id: 1, text: "This is an item", clicked: false},
    {id: 2, text: "This is also an item", clicked: false}
  ];
  
  const [items, setItems] = useState(initialItems);

  const updateItem = (id) => {

    const updatedItems = items.map(x => {
      if (x.id === id)
        x.clicked = !x.clicked;
      
      return x 
    });

    console.log('UPDATED TO:', updatedItems);
    setItems(updatedItems);
  }

  return (
    <div className='Container'>

      <h3>{props.header}</h3>
      <textarea id='potatoArea'/>
      <button onClick={() => setItems(
        prevItems => prevItems.concat(
        {
          id: items.length + 1,
          text: document.getElementById('potatoArea').value,
          clicked: false
        }))}>Add item.</button>
      
      <List updateItem={updateItem} items={items}/>
    </div>
  );
}

export default Container;
