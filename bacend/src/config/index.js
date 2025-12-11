import { config } from "dotenv";
config();

export const envConfig = {
    PORT: Number(process.env.PORT),
    MONGO_URI: String(process.env.MONGO_URL),
    SUPERADMIN: {
        EMAIL: String(process.env.SUPERADMIN_EMAIL),
        PASSWORD: String(process.env.SUPERADMIN_PASSWORD)
    }
};