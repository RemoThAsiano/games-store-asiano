import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({id, title, price, image}) => {
    return (
        
        <div className="card">
            <Link to={'/item/' + id} className='detail'>
            <h3 className="list-group-item">{title}</h3>
            <img src={image} width={300} className="card"></img>
            <h4 className="list-group-item">{price}</h4> 
            </Link>
            {/* <imgsrc={ image} */}
        </div>
        
        // <link to={`/products/${id}`}></link>
           
    );
    
};

export default Item;