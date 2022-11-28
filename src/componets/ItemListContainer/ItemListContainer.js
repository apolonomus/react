
import { useState, useEffect } from 'react' 

const ItemListContainer = ({ greetings }) => {

    const [count,setCount] = useState(0)

    useEffect (() => {
        console.log('función dentro de Effect')

        return () => console.log('El componente se va a desmontar')

        setTimeout(() => {

            console.log('traigo productos')

    },)
    }, [])

    console.log('render')

    return (
        <div>
            <h2>{greetings}</h2>
        </div>
    )
}

export default ItemListContainer