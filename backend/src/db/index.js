import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_DB_URI}/${DB_NAME}`
        );
        console.log(
            `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (err) {
        console.log("MONGODB connection FAILED ", err);
    }
};

export default conectDB;