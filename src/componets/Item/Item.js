import { Link } from "react-router-dom"

const Item =({ products }) => {
    return (
        <div>
            <img src={products.img} alt={product.name} style={{witdh:200}}></img>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>$ {product.price} </p>
            <link to={`/detail/${product.id}`}>Ver Detalle</link>
        </div>
    )

}

export default Item