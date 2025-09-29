import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import path from 'path';
import connectDB from './lib/db.js';
import { ENV } from './lib/env.js';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = path.resolve();

const PORT = ENV.PORT;
app.use(express.json()); // Add this line!
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);



if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,'../frontend/dist')));

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../frontend/dist/index.html'));
    })
}

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})