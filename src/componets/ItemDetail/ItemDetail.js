
import ItemCount, {Count} from '../ItemCount/ItemCount'

const ItemDetail =({ id, name, img, descritpion, price, stock }) => {
    
    const handleOnAdd = (quantity)  => {
        console.log ('Se Agregó al carrito ' + quantity)

    }

    return (
        
        <div>
        <h1>{name}</h1>
        <img src={img} alt={name}></img>
        <p>{description}</p>
        <h2>$ {price}</h2>
        { stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd} />: <h1>No Hay Stock</h1>}
    </div>

    )

}

export default ItemDetail