const mongoose = require('mongoose');
const Item = require('./models/itemSchema');
const Cart = require('./models/cartSchema');

main()
.then(res=>console.log("Connected to mongodb"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rrkumar7371:Ranjeet%407371@cluster0.0g4rs.mongodb.net/e-Shop');

}



const items = [
    {
      title: "Wireless Headphones",
      description: "High-quality noise-canceling wireless headphones with long battery life.",
      price: 8999,
      qty: 20,
      image: "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Smartphone",
      description: "Latest model with high-resolution camera and long-lasting battery.",
      price: 12999,
      qty: 15,
      image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Running Shoes",
      description: "Comfortable and lightweight running shoes for all-day wear.",
      price: 5999,
      qty: 25,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Backpack",
      description: "Stylish and durable backpack with multiple compartments.",
      price: 2599,
      qty: 30,
      image: "https://plus.unsplash.com/premium_photo-1723649902660-66643962d57b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Smart Watch",
      description: "Feature-packed smart watch with heart rate monitor and GPS.",
      price: 1499,
      qty: 10,
      image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Laptop",
      description: "Powerful laptop with high-speed processor and large storage capacity.",
      price: 59999,
      qty: 8,
      image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Coffee Maker",
      description: "Easy-to-use coffee maker with multiple brewing options.",
      price: 999,
      qty: 18,
      image: "https://plus.unsplash.com/premium_photo-1661281243564-5acf9a1797ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Desk Lamp",
      description: "Adjustable LED desk lamp with multiple brightness settings.",
      price: 1499,
      qty: 40,
      image: "https://plus.unsplash.com/premium_photo-1685287731246-ea8d4bdec48d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with deep bass and crystal-clear sound.",
      price: 1299,
      qty: 22,
      image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Yoga Mat",
      description: "Non-slip, eco-friendly yoga mat for all types of workouts.",
      price: 599,
      qty: 50,
      image: "https://plus.unsplash.com/premium_photo-1675155952889-abb299df1fe7?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  
const res = Item.insertMany(items);

// const cartItem = [
//   {
//     title: "Coffee Maker",
//     description: "Easy-to-use coffee maker with multiple brewing options.",
//     price: "999",
//     image: "https://plus.unsplash.com/premium_photo-1661281243564-5acf9a1797ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   }
// ]
// const res = Cart.insertMany(cartItem);