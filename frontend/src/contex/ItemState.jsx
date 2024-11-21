import { useEffect, useState } from "react";
import ItemContex from "./itemContext";

const ItemState = (prop) => {
  const [cart,setCart] = useState([]);
  const [ttlCart,setTtlCart] = useState(null);


  //method of addToCart 
  const addtocart = async (id) => {
    try {
      const host = "http://localhost:8080";
      const response = await fetch(`${host}/api/cart/addtocart`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ id }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  //method of cartItem 
  const cartItem = async () => {
    try {
      const host = "http://localhost:8080";
      const response = await fetch(`${host}/api/cart/cartItems`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        }
      });
      const json = await response.json();
      setCart(json.cartItems.cart);
      setTtlCart(json.cartItems.cart.length);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(()=>{
  //   cartItem()
  // },[]);
    //   console.log(cart)
// setTimeout(()=>{

// },1000)


  //method of order 
  const order = async (itemId) => {
    try {
      const host = "http://localhost:8080";
      const response = await fetch(`${host}/api/cart/order`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ order:itemId }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ItemContex.Provider value={{ addtocart,cart,cartItem,setTtlCart,ttlCart,order }}>
      {prop.children}
    </ItemContex.Provider>
  );
};

export default ItemState;
