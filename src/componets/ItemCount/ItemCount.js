import { useState } from 'react' //Hooks

const ItemCount = ({stock, onAdd}) => {

    const [count,setCount] = useState(0)

     //Estado de COmponente
        const increment = () => {

        if( count < stock ) {
            setCount( prev => prev + 1)
        }
    }

    const decrement = () => {

        if( count > 0 ) {
            setCount( prev => prev - 1)
        }
    } 

    const reset = () => {
        setCount(initial)

    }    


    return (

        <div>
            <p>{count}</p>
            <button onClick={() => reset()}>-</button>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => onAdd(count)} disabled={count === 0 }>Agregar al Carrito</button>
        </div>
    )    
}

export default ItemCount