import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import { useCartContext } from '../../store/CartContextProvider'
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, removeAll, totalPrice } = useCartContext();

  return (
    <div>
      <div className='cart-container'>
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      </div>
      <div className='cart-container-totalPrice'>
      { cartList.length > 0 ? (
      <>
        <button onClick={() => removeAll()}>Vaciar Carrito</button>
        <h4>Precio Total: ${totalPrice()}</h4> 
        <Link to='/checkout'>
      <button>Finalizar compra</button>
      </Link>
      <Link to="/"><button>Seguir comprando</button></Link>
      </> ) : (
      <h1>Vacio</h1>
      )}
      </div>
    </div>
  );
};

export default Cart;




