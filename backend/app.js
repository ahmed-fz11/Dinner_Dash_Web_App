import express from "express";
import mongoose from "mongoose";
import routes from './routes/index.js'
import cors from 'cors'
//importing models
import Item from "./models/Item.js";
import User from "./models/User.js";
import Order from "./models/Order.js";
import Category from "./models/Category.js";

const dbURI = "mongodb://127.0.0.1:27017/dinnerdash";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); //parse incoming JSON requests

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");

    app.listen(PORT,()=>{
        console.log(`Server is listening on PORT: ${PORT}`)
    })

    // Here you can do additional setup or start your server
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

connectToDatabase();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
})

app.use('/',routes)


//defining more routes here after
