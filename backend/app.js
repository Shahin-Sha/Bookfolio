const express = require("express")
const collection = require("./dB.js")
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



app.use(bodyParser.json());

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))



app.get("/", cors(), (req,res)=> {

})

app.post("/", async(req,res)=> {
    const { email, password } = req.body
    try{
        const check = await collection.findOne({ email: email })
        if(check) {
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e) {
        res.json("notexist")
    }
})


app.post("/Signup", async(req,res)=> {
    const { email, password } = req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check = await collection.findOne({ email: email })
        if(check) {
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e) {
        res.json("notexist")
    }
})



// Create a new schema for products
const productSchema = new mongoose.Schema({
    authorName: {
      type: String,
      required: true,
    },
    bookImage: {
      type: String,
      required: true,
    },
  });
  
  // Create a model for products using the schema
  const Product = mongoose.model("Product", productSchema);
  
  // GET route for the home page
//   //app.get("/api/products",cors(), (req, res) => {
//     res.send("Home Page");
//   });
  
  // POST route for adding a product
  app.post("/api/products",cors(), (req, res) => {
    const { authorName, bookImage } = req.body;
  
    const newProduct = new Product({
      authorName: authorName,
      bookImage: bookImage,
    });
  
    newProduct
      .save()
      .then(() => {
        res.json("Product added successfully");
      })
      .catch((error) => {
        console.error("Failed to add product:", error);
        res.status(500).json("Failed to add product");
      });
  });

  app.get("/api/products", cors(), (req, res) => {
    Product.find()
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        console.error("Failed to retrieve products:", error);
        res.status(500).json("Failed to retrieve products");
      });
  });

  


app.listen(3001,()=>{
    console.log("port connected")
})


