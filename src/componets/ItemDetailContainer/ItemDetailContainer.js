import { useState,useEffect } from "react"
import { getProductById } from "../../asyncMock"
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer =() => {
    const [product,setProduct] = useState({})

    const { productId } = useParams

    useEffect = (() => {
        getProductById ('1')
        .then (response => {})
            setProduct(response)
        .cacht(error => console.log(error))
    } , [productId])

    return (
        <div>
            <div>
                <h1>Detalle del Producto</h1>
                <ItemDetail {...product} />
            </div>

        </div>
    )

}

export default ItemDetailContainer  