import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import ItemState from "./contex/ItemState";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <ItemState>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              {!localStorage.getItem("token") ? (
                <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </>
              ) : (null
              )}
              <Route path="/product" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* <Product /> */}
          </div>
        </ItemState>
      </BrowserRouter>
    </>
  );
}

export default App;
