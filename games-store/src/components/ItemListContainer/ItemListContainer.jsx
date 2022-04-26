import React from 'react'
import './ItemListContainer.css'
import Counter from '../COUNTER/Counter'
import ItemList from '../ItemList/ItemList'
import getData from '../../services/getData';
import { useState, useEffect } from "react"

const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState([])
console.log("Products before promise", products)

useEffect(() => {
  getData
    .then((res) => setProducts(res))
    .catch((err) => console.log("Error", err))
    
},[])
    function agregar(){
      console.log('agregaste');
    }
    
    return (
      <div>
        <h3>
        <ItemList products={ products}/>
        </h3>
        <div className='item-list-container'>
        <Counter initial={0} stock={10} onAdd={agregar}/>
        </div>
      </div>
    )
}

export default ItemListContainer;

//agregar boton de if no hay stock que no me deje agregar