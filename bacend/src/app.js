import express from "express";

import { envConfig } from './config/index.js'
import connectDB from "./config/db.js";
import indexRoutes from "./routes/index.route.js";
import { errorHandle } from "./middleware/error-handle.js";
import { ApiError } from "./utils/customer-error.js";
import { createSuperAdmin } from './helper/create-superadmin.js'

const app = express();

app.use(express.json());

await connectDB();
await createSuperAdmin();

app.use("/", indexRoutes);

app.all(/(.*)/, (_req, _res, next) => {
    next(new ApiError('URL not found', 404));
});

app.use( errorHandle)

const PORT = envConfig.PORT || 9000;

app.listen(PORT, () => console.log(`Server running on ${PORT} port`));
