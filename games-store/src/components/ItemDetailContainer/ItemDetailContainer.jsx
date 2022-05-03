import React, {useEffect, useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const item = {
            id: 1,
            image:"https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1200/v1/ncom/en_CA/games/switch/r/rayman-legends-definitive-edition-switch/hero",
            title:"Rayman Legends",
            price:"$200",
            stock:"5",
        };
        setTimeout(() => {
            resolve(item)
        }, 2000)
    });
    return myPromise
}

function ItemDetailContainer(){
    const [item, setItem] = useState({});


useEffect(() => {
    getItem()
        .then(res => {
            setItem(res)
        })
        .catch(err => {
            console.log(err);
            alert('ERROR');
        });
}, [])
return (
    <div className="item-detail-container">
        <ItemDetail item={item} />
    </div>
)
}

export default ItemDetailContainer;