import { useState } from 'react' //Hooks

const Counter = ({initial, stock, onAdd}) => {

     //Estado de COmponente
    const [count,setCount] = useState(initial)
        //Funcion de Variable pero con Caract de React
        //Para volver a renderizar

    const increment = () => {

        if( count < stock ) {
            setCount(count + 1)
        }
    }

    const decrement = () => {

        if( count > stock ) {
            setCount(count - 1)
        }
    } 

    const reset = () => {
        setCount(initial)

    }

    return (

        <div>
            <h2>{count}</h2>
            <button onClick={() => increment()}>Sumar Clicks</button>
            <button onClick={() => reset()}>reset</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )    
}

export default Counter