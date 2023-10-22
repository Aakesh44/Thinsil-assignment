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
import Final from './Final'
import { Routes,Route,useLocation } from 'react-router-dom';
import Aos from 'aos';
import Notfound from './Notfound';

function App() {

  const location = useLocation()

  useEffect(()=>{
    
    window.scrollTo(0,0)

  },[location.pathname])

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);


  return (
    <main className="App relative">
      
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

          <Route path='/checkout' element={ <Final/>} />

          <Route path='*' element={<Notfound/>} />

        </Routes>
      </section>

      <Footer/>

    </main>
  );
}

export default App;
