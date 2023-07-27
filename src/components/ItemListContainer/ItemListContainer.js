import '../../App.css'
import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) =>{

    const[products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div className="greeting">
            {/* <div className="greeting"> */}
                <h1>{greeting}</h1>
            {/* </div> */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer