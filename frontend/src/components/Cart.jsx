import React, { useContext, useEffect } from "react";
import ItemContex from "../contex/itemContext";

const Cart = () => {
  const contex = useContext(ItemContex);
  const { cart,cartItem,order } = contex;
// console.log(cart);

const cartAddedItem = cart.reduce((acc,item)=>{
    if(!acc[item.title]){
        acc[item.title]=[];
    }
    acc[item.title].push(item);
    return acc;
},[]);


// console.log(typeof cartAddedItem);
const idArray = [];
cart?.reduce((item,acc)=>{
  idArray.push(acc._id);
  // console.log(acc._id);
},0)

const handleOrder =async () =>{
  const confirmOrder =await order(idArray);
  if(confirmOrder.status==true){
    alert(`Your order is placed successfully Your order No ${confirmOrder.orderNo}`);
  }
}

useEffect(()=>{
  cartItem();
},[])
// console.log(idArray);
  
  return (
    <div className="row mt-3">
        <div className="col col-9">
      {Object.values(cartAddedItem)?.map((item) => (
        
        <div className="card mb-3" key={item[0]._id}>
          {/* {console.log(item)} */}
          <div className="row g-2">
            <div className="col-md-4 mb-3">
              <img
                src={item[0].image}
                className="img-fluid rounded-start"
                alt="Product ref image"
              />
              {/* {console.log(item[0].title)} */}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item[0].title}</h5>
                <p className="card-text">
                  <small className="text-muted">₹ {item[0].price.toLocaleString("en-IN")}</small>
                  <div className="mt-2">
                    <button className="btn btn-outline-primary"> + </button>&nbsp;
                    {item.length}
                    &nbsp;<button className="btn btn-outline-primary"> - </button>
                  </div>
                </p>
                <p className="card-text">{item[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="col col-3 d-flex flex-column">
        <h4>Total Price</h4>
        <p>Total Price : ₹{cart?.reduce((curr,acc)=>{return curr+acc.price},0).toLocaleString("en-IN")}</p>
        <button className="btn btn-outline-primary" onClick={handleOrder}>Order Now</button>
      </div>
    </div>
  );
};

export default Cart;
