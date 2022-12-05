const products = [
    {
    id:'1',
    name:'iphone',
    price:1000,
    category:'celular',
    img:'https://www.pngitem.com/pimgs/m/413-4135877_modelo-de-celular-lg-hd-png-download.png',
    stock:'30',
    description:'Detalle del producto'
    },
    {id:'2', name:'Samsung 21', price:800, category:'celular', img:'https://www.pngitem.com/pimgs/m/413-4135877_modelo-de-celular-lg-hd-png-download.png',stock:'100',description:'Detalle del producto'},
    {id:'3', name:'Ipad', price:2500, category:'tablet', img:'https://www.pngitem.com/pimgs/m/413-4135877_modelo-de-celular-lg-hd-png-download.png',stock:'100',description:'Detalle del producto'},

]

export const getProducts = () => {
    return new Promise ((resolve) => 
        setTimeout (() => {
            resolve(products)
        },500)

    )

}

export const getProductId = (id) => {
    return new Promise ((resolve)=>{
    setTimeout (()=>{
    resolve(products.find((item)=> item.id === id))
    },2000)
    })
    }