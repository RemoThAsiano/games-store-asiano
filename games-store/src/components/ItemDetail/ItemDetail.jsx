import React from 'react'
import Counter from '../COUNTER/Counter'
import './ItemDetail.css'

function ItemDetail({ item }) {
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
            <Counter  initial={0} stock={item.stock} onAdd={() => {}}/>
            {/* agregarle el color de la imagen designada */}
            
        </div>
        </div>
    </div>
    </div>
  )
}

export default ItemDetail;
