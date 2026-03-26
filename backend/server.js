const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// Products data
const products = [
    // Electronics
    {
      id: 1,
      name: "Laptop",
      price: 800,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 2,
      name: "Phone",
      price: 500,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
  
    // Beauty
    {
      id: 3,
      name: "Toner",
      price: 20,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
    },
    {
      id: 4,
      name: "Moisturizer",
      price: 25,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
    },
    {
            id: 5,
            name: "Sunscreen",
            price: 15,
            category: "Beauty",
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400"
    },
    {
      id: 6,
      name: "Face Wash",
      price: 10,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
    },
  
    // Fashion
    {
      id: 7,
      name: "T-Shirt",
      price: 30,
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 8,
      name: "Jeans",
      price: 60,
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
    },
  
    // Home
    {
      id: 9,
      name: "Sofa",
      price: 500,
      category: "Home",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    },
    {
      id: 10,
      name: "Chair",
      price: 100,
      category: "Home",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657"
    },
  
    // Grocery
    {
      id: 11,
      name: "Rice",
      price: 20,
      category: "Grocery",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
    },
    {
      id: 12,
      name: "Milk",
      price: 5,
      category: "Grocery",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
  
    // Sports
    {
      id: 13,
      name: "Football",
      price: 25,
      category: "Sports",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
    },
    {
      id: 14,
      name: "Cricket Bat",
      price: 40,
      category: "Sports",
      image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a"
    }
  ];

// ✅ ADD THIS ROUTE
app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = 5050;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

// keep server alive
setInterval(() => {}, 1000);