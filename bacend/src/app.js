import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import indexRoutes from "./routes/index.route.js";
import { errorHandle } from "./middleware/error-handle.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();
console.log("hello my friend");


app.use("/", indexRoutes);

app.use( errorHandle)

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server running on ${PORT} port`));
