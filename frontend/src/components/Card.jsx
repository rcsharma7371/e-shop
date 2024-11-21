import React, { useEffect, useContext, useState } from "react";
import ItemContex from "../contex/itemContext";


export default function Card({ prod }) {
  const [disable,setDisable] = useState(false);
  const contex = useContext(ItemContex);
  const {addtocart,setTtlCart,ttlCart} = contex;

  const handleAddToCart = () => {
    addtocart(prod._id)
    console.log("item added into the cart");
    setDisable(true);
    setTtlCart(ttlCart+1);
  };

  const handleStyle = {
    card:{
      width:'80%'
    },
    image:{
      width:'100%',
      height:'80%',
      onjectFit:'contain'
    }
  }

  return (
    <div className="card m-2" style={handleStyle.card}>
      <img src={prod.image} className="card-img-top" alt="..." style={handleStyle.image}/>
      <div className="card-body">
        <h5 className="card-title">{prod.title}</h5>
        <p className="card-text">{prod.description.slice(0,40)}...</p>
        <button className="btn btn-primary" onClick={handleAddToCart} disabled={disable}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
