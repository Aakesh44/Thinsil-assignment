import { createContext } from "react";
import Data from '../data/data.json'
import { useState } from "react";

const DataContext = createContext({})

export const DataProvider = ({children})=>{

const allProducts = Data
// console.log(allProducts);
const [likeProducts,setLikeProducts] = useState(
    Data.filter(n=>n.like)
)

const [cartProducts,setCartProducts] = useState(
    Data.filter(n=>n.inCart)
)

function handleCart(product) {
    let temp = cartProducts.find(n=>n.id === product.id)

    if(temp){
        setCartProducts(prev=>prev.filter(n=>n.id !== product.id))
    }
    else{
        setCartProducts(prev=>[...prev,product])
    }
}

function handleLike(product) {
    let temp = likeProducts.find(n=>n.id === product.id)

    if(temp){
        setLikeProducts(prev=>prev.filter(n=>n.id !== product.id))
        console.log('ki');
    }
    else{
        setLikeProducts(prev=>[...prev,product])
        console.log('vi');
    }
}

return(
    <DataContext.Provider
    value={{

        allProducts,

        cartProducts,
        likeProducts,

        handleCart,
        handleLike
    }}>

        {children}
    </DataContext.Provider>
)
}

export default DataContext
