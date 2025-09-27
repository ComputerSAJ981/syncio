import mongoose from 'mongoose';
import { ENV } from './env.js';

const connectDB = async () => {
    try {
        const {MONGO_URL}= ENV;
        if(!MONGO_URL){
            throw new Error("MONGO_URL is not set");
        }
        const conn = await mongoose.connect(ENV.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error in connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB;