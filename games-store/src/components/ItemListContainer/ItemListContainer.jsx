import React from 'react'
import './ItemListContainer.css'
import Counter from '../COUNTER/Counter'

function ItemListContainer({greeting}) {
    function agregar(){
      console.log('agregaste');
    }
    return (
      <div className='item-list-container'>
        <Counter initial={0} stock={10} onAdd={agregar}/>
      </div>
    )
}

export default ItemListContainer;

//agregar boton de if no hay stock que no me deje agregar