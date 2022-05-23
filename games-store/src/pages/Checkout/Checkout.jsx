import React from 'react'
import { useState, useContext } from 'react'
import { CartContext, useCartContext } from '../../store/CartContextProvider'
import { doc, getDoc, getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

// {buyer: { name, phone, email }, items: [{ id, title, price, amount }], date, total }
export const Checkout = () => {

    const {cartList, totalPrice, removeAll} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [orderID, setOrderID] = useState()

    
    const [ buyer, setBuyer ] = useState({
        Name:'',
        Phone:'',
        Email:''
        
    })

    const {Name, Phone, Email} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    
    }

    const db = getFirestore();
    const generateOrder = async(data) => {
        setLoading(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data)
            
            setOrderID(order.id)
            removeAll([])
            console.log(col, data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date()
        const items = cartList.map(e => {return {id:e.id,name:e.name,price:e.price,quantity:e.quantity }})
        const total = totalPrice()
        const data = {buyer, items, date, total}
        generateOrder(data)
        

    }

  return (
    <>
        <h1>Finalizando Compra</h1>
        <hr />
        { loading ? <Spinner/> : (!orderID &&<div>
        <h4>Completar Datos:</h4>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Name" value={Name} onChange={handleInputChange} required></input>
            <br />
            <input type="number" name="Phone" placeholder="Phone" value={Phone} onChange={handleInputChange} required></input>
            <br />
            <input type="email" name="Email" placeholder="Email" value={Email} onChange={handleInputChange} required></input>
            <br /> <br />
            <input type="submit" value="Finalizar Compra" className=''></input>
            
        </form>
        </div>)
        }<div>
        {
            orderID&&(
                <div>
                    <h4>Compra Finalizada con Exito</h4>
                    <h4>{`Su código de compra es: ${orderID}`}</h4>
                    <Link to="/"><h5>Volver a GameStore</h5></Link>
                </div> )
        }
        </div>
    </>
    
  )
}
