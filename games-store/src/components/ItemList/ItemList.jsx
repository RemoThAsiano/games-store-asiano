import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ item }) => {
    // console.log("Products en itemList", item)
    return(
        <div className="item-list-container">
            {item.map((item) => {
                // console.log(item)
                return (
                <Item key={item.id} id={item.id} title={item.title} price={item.price} image={item.image}/>
                );
            })}
        </div>
    );
};

export default ItemList;