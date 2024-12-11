import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Allow only this origin
  methods: "GET,POST,DELETE,PUT", // Allow only specific HTTP methods
  credentials: true, // Allow cookies if needed
}));
const PORT = process.env.PORT|| 3500;
app.use(express.json());

app.use("/products",productRoutes);

app.listen(3500 ,()=>{
  connectDB();
  console.log("Server started at port 3500")
})


