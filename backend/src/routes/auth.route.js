import express from 'express';

const router = express.Router();

router.get("/signup",(req,res)=>{
    res.send("This is signup endpoint");
})

router.get("/login",(req,res)=>{
    res.send("This is login endpoint");
})

router.get("/logout",(req,res)=>{
    res.send("This is logout endpoint");
})

export default router;