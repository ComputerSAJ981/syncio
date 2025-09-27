import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const {MONGO_URL}= process.env;
        if(!MONGO_URL){
            throw new Error("MONGO_URL is not set");
        }
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error in connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB;