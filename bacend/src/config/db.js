import { connect } from "mongoose"

async function connectDb() {
    try {
        await connect(String(process.env.MONGO_URL));
        console.log("database connect");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;