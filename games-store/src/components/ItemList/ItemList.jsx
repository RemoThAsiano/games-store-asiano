import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products }) => {
    console.log("Products en itemList", products)
    return(
        <div className="item-list-container">
            {products.map((product) => {
                console.log(product)
                return (
                <Item key={product.id} title={product.title} price={product.price} image={product.image}/>
                );
            })}
        </div>
    );
};

export default ItemList;