import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import ProductsP from './Pages/ProductsP';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductP from './Pages/ProductP'
import Cart from './Components/Cart';

// import { createContext } from 'react'

function App() {

  // export const PopupContext = createContext()


  return (
    <div className="App">

       <BrowserRouter>
         <Header />
       <div className='main'>
         <Cart />
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/categories/:products' element={<ProductsP />} />
             <Route path='/item/:itemId' element={<ProductP />} />
           </Routes>
       </div>
         </BrowserRouter>
     </div>
  );
}

export default App;
