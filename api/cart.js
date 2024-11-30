const express = require("express");
const router = express.Router();
const Items = require("../models/itemSchema");
const fetchUser = require("../fetchUser");
const User = require("../models/userSchema");

let status = false;

//add to cart using POST "/cart/addtocart" Login required
router.post("/addtocart", fetchUser, async (req, res) => {
  try {
    const { id } = req.body;
    const item = await Items.findById(id).select("-qty");
    console.log("id", id, "item :", item);
    const cartItem = {
      title: item.title,
      description: item.description,
      price: item.price,
      image: item.image,
    };
    console.log(req.user);

    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      { $push: { cart: cartItem } },
      { new: true } // Return the updated document
    );
    // console.log(updatedUser);
    status = true;
    res.json({ status, updatedUser });
  } catch (error) {
    // console.log("Item not added into the cart");
    res.status(500).json({ error: "Something went wrong! Server error" });
  }
});

//fetch all cartItems using GET "/cart/cartItems" Login required
router.get("/cartItems", fetchUser, async (req, res) => {
  try {
    // const item = await Items.findById(itemId).select("-qty");
    const cartItems = await User.findById(req.user);
    if (cartItems.cart.length == 0) {
      return res.status(200).json({ success: "No any item into the cart" });
    }
    status = true;
    res.json({ status, cartItems });
  } catch (error) {
    // console.log("Something went wrong! please try again");
  }
});

//fetch all Items using GET "/cart/allItems"
router.get("/allItems", async (req, res) => {
  try {
    const item = await Items.find({});
    if (!item) {
      return res.status(200).json({ success: "No any item in the store" });
    }
    status = true;
    res.json({ status, item });
  } catch (error) {
    status=false;
    res.status(500).json({status,error:'Internal Server Error'})
    // console.log("Something went wrong! please try again", error);
  }
});

//create order POST "/cart/order" Login required
router.post("/order", fetchUser, async (req, res) => {
  try {
    const { order } = req.body;
    let orderdItem;
    // console.log(req.user);
    orderdItem = await User.findByIdAndUpdate(
      req.user,
      { $push: { order} },
      { new: true } // Return the updated document
    );

    // console.log(orderdItem);
    status = true;
    res.json({ status, orderNo: orderdItem.order });
  } catch (error) {
    status=false;
    // console.log("Item not added into the cart", error);
    res.status(500).json({ status,error: "Something went wrong! Server error" });
  }
});

module.exports = router;
