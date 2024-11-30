const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors')

const port = 8080;
app.use(express.json())
app.use(cors());

app.listen(port,()=>{
    console.log(`backend is runnign on port ${port}`)
})

main()
.then(res=>console.log("Connected to mongodb"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rrkumar7371:Ranjeet%407371@cluster0.0g4rs.mongodb.net/e-Shop');

}

app.get('/',(req,res)=>{
    res.send("Backend connected");
})

//Available routes
app.use('/api/auth/',require('./api/auth'))
app.use('/api/cart/',require('./api/cart'))