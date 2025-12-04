import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import indexRoutes from "./routes/index.route.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/", indexRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server running on ${PORT} port`));
