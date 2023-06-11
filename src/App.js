import Header from "./Components/Header/Header";
import Product from "./Components/Product/product";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductDetails from "./Components/Details/ProductDetails";
import Cart from "./Components/Cart/Cart";


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
