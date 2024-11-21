import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ItemContex from "../contex/itemContext";

export default function Product() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);


  const host = "http://localhost:8080";

  // Get all Items
  const allItems = async () => {
    try {
      const response = await fetch(`${host}/api/cart/allItems`, {
        method: "GET",
      });
      const json = await response.json();
      setItem(json.item);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    allItems();
  }, []);

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  // console.log("item List : ", item);
  return (
    <div className="row mt-3 d-flex justify-content-between flex-wrap">
      {item?.map((prod) => (
        <div key={prod._id} className="col col-lg-3 col-md-6 col-sm-12 col-xs-md-12 ">
          <Card prod={prod}  />
        </div>
      ))}
    </div>
  );
}
