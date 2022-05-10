import React, { useEffect } from 'react'
import Counter from '../COUNTER/Counter'
import { useState } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cartContext';

function ItemDetail({ item }) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    // const cartCtx = UseContext(CartContext);

    // useEffect(() => {
    //     console.log(cartCtx)
    // }, []);

    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd); // se va
        //Agregar "item" en addHAndler con quantityToAdd
        //cartCtx.addProducts(item);
        //
    }
  return (
    <div className='item-detail'>
        <div className='izq'>
            <div className='img-detail-container'>
                <img className='card' src={ item?.image } alt='img' />
            </div>
        </div>
        <div className='der'>
    <div className='card'>
        <div className='info-container'>
            <h1>{ item?.title }</h1>
            {/* <h6>{item?.id}</h6> */}
            <h3>{ item?.price }</h3>
            </div>
            <div className='count-countainer'>
            {cantidadDeProductos ?
                <button className='terminar-compra'><Link to='/cart'>Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                <Counter initial={0} stock={item.stock} onAdd={addHandler} />
                //cambiar cantidadDeProductos por "cartCtx.products.length"
                //en button onClick={() => console.log(cartCtx)}
            }
        </div>
        </div>
    </div>
    </div>
  )
}

export default ItemDetail;
