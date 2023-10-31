import './App.css';
import { useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import MainSec from './components/MainSec'
import Products from './components/Products'
import SignUp from './components/SignUp'
import Login from './components/LogIn'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import SelectedProduct from './components/SelectedProduct'
import Final from './components/Final'
import { Routes,Route,useLocation } from 'react-router-dom';
import Aos from 'aos';
import Notfound from './components/Notfound';
import { DataProvider } from './context/dataContext';
import Profile from './components/Profile';
import Orders from './components/Orders';

function App() {

  const location = useLocation()

  useEffect(()=>{
    
    window.scrollTo(0,0)

  },[location.pathname])

  // initializing AOS

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);


  return (
    <main className="App relative">
    <DataProvider>

      <Header/>

      <section>
        <Routes>

          <Route path='/' element={ <MainSec/> }/>

          <Route path='/products' element={ <Products/> } />

          <Route path='/products/:id' element= {<SelectedProduct/> } />

          <Route path='/signup' element ={ <SignUp/> }/>

          <Route path='/login' element ={ <Login/> }/>
          
          <Route path='/user/profile' element= {<Profile/>}/>
          
          <Route path='/user/orders' element={<Orders/>}/>

          <Route path='/wishlist' element ={ <Wishlist/> }/>

          <Route path='/cart' element ={ <Cart/> }/>

          <Route path='/checkout' element={ <Final/>} />

          <Route path='*' element={<Notfound/>} />

        </Routes>
      </section>

      <Footer/>
      
    </DataProvider>
    </main>
  );
}

export default App;
