import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <h1 className='h1'>{ greeting }
    </h1>
  )
}

export default ItemListContainer;