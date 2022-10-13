import { Routes, Route } from "react-router-dom";
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from  './components/pages/Home';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import SingleProduct from './components/pages/SingleProduct';
import ShoppingCart from './components/pages/ShoppingCart';
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/Home' element ={<Home/>} />
    <Route path='/Login' element ={<Login/>}/>
    <Route path='/Signup' element = {<Signup/>}/>
    <Route path='/Products/:cat' element={<Products/>}/>
    <Route path='/Products/:id/:cat'  element = {<SingleProduct/>}/>
    <Route path='/ShoppingCart' element = {<ShoppingCart/>}/>
   </Routes>
   <Footer/>
   
   </>
  );
};

export default App;