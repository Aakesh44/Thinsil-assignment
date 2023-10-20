import './App.css';
import { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import MainSec from './MainSec'
import Products from './Products'
import SignUp from './SignUp'
import Login from './LogIn'
import Wishlist from './Wishlist'
import Cart from './Cart'
import SelectedProduct from './SelectedProduct'

import { Routes,Route } from 'react-router-dom';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <main className="App relative pb-96">
      
      <Header/>

      <section>
        <Routes>

          <Route path='/' element={ <MainSec/> }/>

          <Route path='/products' element={ <Products/> } />

          <Route path='/products/:id' element= {<SelectedProduct/> } />

          <Route path='/signup' element ={ <SignUp/> }/>

          <Route path='/login' element ={ <Login/> }/>

          <Route path='/wishlist' element ={ <Wishlist/> }/>

          <Route path='/cart' element ={ <Cart/> }/>


        </Routes>
      </section>

      <Footer/>

    </main>
  );
}

export default App;
