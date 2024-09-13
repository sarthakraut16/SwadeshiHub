import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Jewellery from './Components/Jewellery/Jewellery';
import Home from './Pages/Home';
import HomeDecore from './Components/HomeDecore/HomeDecore';
import Clothing from './Components/Clothing/Clothing';
import Gifting from './Components/Gifting/Gifting';
import Organic from './Components/Organic/Organic';
import Art from './Components/Art/Art';
import HandiCraft from './Components/HandiCraft/HandiCraft';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/home-decore' element={<HomeDecore/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
        <Route path='/gifting' element={<Gifting/>}/>
        <Route path='/organic' element={<Organic/>}/>
        <Route path='/art-and-craft' element={<Art/>}/>
        <Route path='/handicraft' element={<HandiCraft/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        {/* <Route path='/womens' element={<ShopCategory category="womens"/>}/> */}
        {/* <Route path='/kids' element={<ShopCategory category="kids"/>}/> */}
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
