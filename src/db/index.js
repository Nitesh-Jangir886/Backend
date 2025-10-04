//hum file naam kuch bhi rakh sakte hai jaruei nahi hai ki index.js hi rakhe

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !!! DB Hoat : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1);
    }
}

export default connectDB