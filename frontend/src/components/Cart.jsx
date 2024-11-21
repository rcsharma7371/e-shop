import React, { useContext } from "react";
import ItemContex from "../contex/itemContext";

const Cart = () => {
  const contex = useContext(ItemContex);
  const { cart } = contex;
console.log(cart);
//   const groupedItems = items.reduce((acc, item) => {
//     if (!acc[item.name]) {
//       acc[item.name] = []; // Initialize array if it doesn't exist
//     }
//     acc[item.name].push(item);
//     return acc;
//   }, {});
  
//   console.log(groupedItems);

// const cartItem = cart.reduce((acc,item)=>{
//     if(!acc[item.title]){
//         acc[item.title]=[];
//     }
//     acc[item.title]
// })
  
  return (
    <div className="row mt-3">
        <div className="col col-9">
      {cart?.map((item) => (
        <div className="card mb-3" key={item._id}>
          <div className="row g-2">
            <div className="col-md-4 mb-3">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt="Product ref image"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  <small className="text-muted">₹ {item.price.toLocaleString("en-IN")}</small>
                  <div className="mt-2">
                    <button className="btn btn-outline-primary"> + </button>&nbsp;
                    qty
                    &nbsp;<button className="btn btn-outline-primary"> - </button>
                  </div>
                </p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="col col-3 d-flex flex-column">
        <h4>Total Price</h4>
        <p>Total Price : ₹{cart?.reduce((curr,acc)=>{return curr+acc.price},0).toLocaleString("en-IN")}</p>
      </div>
    </div>
  );
};

export default Cart;
