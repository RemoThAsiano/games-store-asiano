
const Item = ({ id, title, price, image}) => {
    return (
        <div className="card">
            <h1>{id}</h1>
            <h3 className="list-group-item">{title}</h3>
            <h4 className="list-group-item">{price}</h4>
            <img src={image} width={300} className="card"></img>
            {/* <imgsrc={ image} */}
        </div>
        // <link to={`/products/${id}`}></link>
           
    );
    
};

export default Item;