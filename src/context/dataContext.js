import { createContext, useEffect ,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({children})=>{

const navigate = useNavigate()

const [products,setProducts] = useState([])
const [userId,setUserId] = useState(null)
const [mainUser,setMainUser] = useState(null)

const [likedProducts,setLikedProducts] = useState([])
const [cartProducts,setCartProducts] = useState([])

const [searchProducts,setSearchProducts] = useState([])

const [orders,setOrders] = useState([])


async function getProducts() {
    try {
        
        const response = await axios.get('http://localhost:4000/products')
        const data = await response.data
        // console.log('All products fetched');
        setProducts(data)

    } catch (error) {
        console.log(error);
    }
}

function handleUser() {
    const res = localStorage.getItem("store-user")
    if(res){
        const userid = JSON.parse(res)
        setUserId(userid)
        // console.log(userid);
    }
}

async function getMainUser() {
    try {
        
        const response = await axios.get(`http://localhost:4000/user/${userId}`)
        const data = await response.data
        setMainUser(data)
        // console.log('user data fetched');
    } catch (error) {
        console.log(error);
    }
}

async function getOrders() {

  if(userId){
    try {
      const response = await axios.get(`http://localhost:4000/fetchOrder/${userId}`)
      setOrders(response.data)
    //   console.log(response.data);
    } catch (error) {
      console.log('err:',error);
    }
  }
}

useEffect(()=>{
    getProducts()
    handleUser()
    if(userId){
        getMainUser()
    }
    getOrders()
},[userId])

function handleWishlistProducts() {
    const items = products?.filter((n)=>mainUser?.likedProducts?.includes(n._id))
    // console.log(items);
    setLikedProducts(items)
}

function handleCartProducts() {
    const items = products?.filter((n)=>mainUser?.cartProducts?.includes(n._id))
    // console.log(items);
    setCartProducts(items)
}

useEffect(()=>{
    handleWishlistProducts()
    handleCartProducts()
},[products,mainUser])

async function handleAddToCart(productId) {
    try {
      const config = {
          headers: {
              "Content-Type":"application/json"
          }
      }

      const response = await axios.put(
          "http://localhost:4000/addToCart",
          {
            userId:mainUser._id,
            productId:productId 
          },
          config
      )
      setMainUser(response.data.userProfile)
      // console.log('add to cart');
      // handleGetUser()
  } 
  catch (err) {
      console.log(err.message);
  }
}

async function handleRemoveFromCart(productId) {
    try {
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

        const response = await axios.put(
            "http://localhost:4000/removeFromCart",
            {
                userId:mainUser._id,
                productId:productId
            },
            config
        )
        setMainUser(response.data.userProfile)
        // console.log('remove from cart');
        // handleGetUser()
    } 
    catch(err){
        console.log(err.message);
    }
}

async function handleLikeProduct(productId) {
    try {
      const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await axios.put(
      "http://localhost:4000/like",
      {
        userId:mainUser._id,
        productId:productId
      },
      config
    )
    setMainUser(response.data.userProfile)
    // console.log(response.data.userProfile);
    // handleGetUser()
    } 
    catch (err) {
      console.log(err.message);
    }
}

async function handleDislikeProduct(productId) {
    try {
      const config = {
          headers: {
              "Content-Type":"application/json"
          }
      }

      const response = await axios.put(
          "http://localhost:4000/dislike",
          {
            userId:mainUser._id,
            productId:productId
          },
          config
      )
      setMainUser(response.data.userProfile)
      // console.log('disliked');
      // handleGetUser()
  } 
  catch (err) {
      console.log(err.message);
  }
}

async function handlePlacingOrder() {

    if(!cartProducts.length) return 
    const productsIds = cartProducts.map(n=>n._id)
    const price = cartProducts.reduce((acc,a)=>{return acc + a.price},0)
    const finalPrice = price - ((price*10)/100)


    try {
        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

        const response = await axios.post(
            "http://localhost:4000/orderPlace",
            {
                userId:mainUser._id,
                productsId:productsIds,
                price:finalPrice
            },
          config
        )
        const newOrder = response.data
        console.log(response.data);
        setOrders(prev=> [...prev,newOrder])
        navigate('/')
      
    } catch (error) {
        console.log(error.message);
    }
}

function handleSearchProducts(e,searchQuery) {

    e.preventDefault()

    const items = products.filter((product)=>{
        const title = product.title.split(" ").join("").toLowerCase()
        const query =searchQuery.split(" ").join("").toLowerCase()

        
        if(title.includes(query)){
            console.log(title,query);
            return true
        }
        else{
            return false
        }
    }   
)    

    setSearchProducts([...items])
    // console.log(items);
    navigate('/products')
}

return(
    <DataContext.Provider
    value={{

        products,
        mainUser,
        handleUser,

        cartProducts,
        handleAddToCart,
        handleRemoveFromCart,

        likedProducts,
        handleLikeProduct,
        handleDislikeProduct,

        searchProducts,
        handleSearchProducts,

        orders,
        handlePlacingOrder
    }}>

        {children}
    </DataContext.Provider>
)
}

export default DataContext
